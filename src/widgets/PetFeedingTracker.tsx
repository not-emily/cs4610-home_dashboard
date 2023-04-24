import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { MdAdd, MdArrowBack, MdCheck, MdDelete, MdEdit, MdMenu, MdMore, MdMoreHoriz } from 'react-icons/md'



type Pet = {
  id: string,
  creatorId: string,
  name: string,
  freq_hr: number,
  was_fed: boolean
}

type Toast = {
    message: string,
    type: "success" | "error" | "info"
}

export const PetFeedingTracker = () => {
    const user = useContext(UserContext);
    const [flip, setFlip] = useState(0)
    const [pets, setPets] = useState<Pet[]>([])
    const [petName, setPetName] = useState("")
    const [petFreq, setPetFreq] = useState(0)
    const [petIdToEdit, setPetIdToEdit] = useState("")
    const [editPetName, setEditPetName] = useState("")
    const [editPetFreq, setEditPetFreq] = useState(0)
    const [addAnother, setAddAnother] = useState(false)
    const [toast, setToast] = useState<Toast | null>(null)
    const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout>()

    useEffect(() => {
        loadPets();
    }, [])

    useEffect(() => {
        clearTimeout(toastTimeout)
        if (toast != null) {
          setToastTimeout(setTimeout(() => {
            setToast(null)
          }, 3000));
        }
      }, [toast]);

    // Reset after going to main view
    useEffect(() =>{
        if (flip === 0) {
            setPetIdToEdit("")
            setEditPetName("")
            setEditPetFreq(0)
        }
    }, [flip])

    function newToast(message: string, type: string) {
        setToast({message, type} as Toast)
    }

    async function loadPets() {
        const querySnapshot = await getDocs(
            query(
            collection(db, "pets"),
            where("creatorId", "==", user!.uid)
            )
        );
        const myItems: Pet[] = [];
        querySnapshot.forEach((doc) => {
            myItems.push({ ...doc.data(), id: doc.id } as Pet);
        });
        setPets(myItems);
    }

    async function createPet() {
        if (!petName) {
            return;
        }
        const item = {
            name: petName,
            freq_hr: 1,
            was_fed: false,
            creatorId: user!.uid,
        }
        const docRef = await addDoc(collection(db, "pets"), item);

        (item as Pet).id = docRef.id;
        setPets([...pets, item as Pet]);
    }

    // async function completeGroceryItem(item: Pet) {
    //     item.isCompleted = true
    //     deleteDoc(doc(db, "pets", item.id))

    //     const newItems = items.filter(e => e.id != item.id)
    //     setItems(newItems)

    //     newToast(`Completed ${item.content}`, "success")
    // }

    function switchToEdit(pet: Pet) {
        setFlip(2)
        setPetIdToEdit(pet.id)
        setEditPetName(pet.name)
        setEditPetFreq(pet.freq_hr)
    }

    async function toggleFeeding(pet: Pet) {
        pet.was_fed = !pet.was_fed
        setPets([...pets])

        const taskDocRef = doc(db, 'pets', pet.id)
        try{
            await updateDoc(taskDocRef, {
                was_fed: pet.was_fed
            })
            if (pet.was_fed) {
                newToast(`Fed ${pet.name}`, "success")
            } else {
                newToast(`Marked ${pet.name} as unfed`, "info")
            }
        } catch (err) {
            alert(err)
            newToast(`Error: Could not update ${pet.name}`, "error")
        }   
    }

    async function editPet(petName: string) {
        const taskDocRef = doc(db, 'pets', petIdToEdit)
        try{
            await updateDoc(taskDocRef, {
                name: petName
            })
            setPets([])
            loadPets()
            setFlip(0)
            newToast(`Updated "${petName}"`, "success")
        } catch (err) {
            alert(err)
            newToast(`Error: Could not update "${petName}"`, "error")
        }   
    }

    function confirmDelete(petId: string, petName: string) {
        const result = confirm(`Are you sure you want to delete ${petName}?`)
        if (result) {
          deletePet(petId);
        }
      }

    async function deletePet(petId: string) {
        try {
            await deleteDoc(doc(db, "pets", petId))
            newToast(`Deleted ${editPetName}`, "success")

            const newPets = pets.filter(e => e.id != petId)
            setPets(newPets)

            setEditPetName("")
            setPetIdToEdit("")
            setFlip(0)
        } catch (err) {
            alert(err)
            newToast(`Error: Unable to delete ${editPetName}`, "error")
        }
    }

    return (
        <>
            <div className="widget__header">
                <div className="widget__title">Pet Feeding Tracker</div>
                <div className="widget__action">
                    {
                        flip === 0 ? 
                            <button onClick={() => setFlip(1)}><MdAdd className="widget__action__icon"/></button>:
                        flip === 1 ?
                            <button onClick={() => setFlip(0)}><MdArrowBack className="widget__action__icon" /></button>:
                        flip === 2 ?
                            <button onClick={() => setFlip(0)}><MdArrowBack className="widget__action__icon" /></button>:
                            <></>
                    }
                </div>
            </div>
            <div className="widget__content">
                {
                    flip === 0 ?
                        <div>{pets.map(pet => (
                            <div key={pet.id} className={pet.was_fed ? "pet fed" : "pet unfed"}>
                                <p className="pet__name" onClick={() => {toggleFeeding(pet)}}>{pet.name}</p>
                                <button className="pet__action" onClick={()=>{switchToEdit(pet)}}><MdEdit /></button>
                            </div>
                        ))}</div>:
                    flip === 1 ?
                        <div className="flip">
                            <form onSubmit={(e) => {
                                if (petName != null) {
                                    createPet()
                                }
                                if (!addAnother) {
                                    setFlip(0)
                                }
                                setPetName("")      // Reset text field after submission
                                setPetFreq(0)
                                e.preventDefault()
                            }}>
                                <input type="text" placeholder="Pet name..." value={petName} onChange={(e) => setPetName(e.target.value)} />
                                <p className="add-another"><input type="checkbox" checked={addAnother} onChange={() => {setAddAnother(!addAnother)}}/>Add another</p>
                                <input className="fw-btn" type="submit" value="Save" />
                            </form>
                        </div>:
                    flip === 2 ?
                        <div className="flip">
                            <form onSubmit={(e) => {
                                if (editPetName != null) {
                                    editPet(editPetName)
                                }

                                e.preventDefault()
                            }}>
                                <input type="text" value={editPetName} onChange={(e) => setEditPetName(e.target.value)} />
                                <input type="submit" value="Save" />
                                <p><button className="fw-btn err-btn" onClick={() => {confirmDelete(petIdToEdit, editPetName)}}>Delete <MdDelete /></button></p>
                            </form>
                        
                        </div>:
                        <></>
                }
            </div>
            { toast != null ? <div className={`toast toast--${toast.type}`}>{toast.message}</div> : <></> }
        </>
    )
}