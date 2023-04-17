import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user";
import { addDoc, collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";


type GroceryItem = {
  id: string,
  creatorId: string,
  content: string,
  isCompleted: boolean,
}

export const GroceryList = () => {
    const user = useContext(UserContext);
    const [flip, setFlip] = useState(0)
    const [items, setItems] = useState<GroceryItem[]>([])
    const [content, setContent] = useState("")
    const [addAnother, setAddAnother] = useState(false)

    useEffect(() => {
        loadGroceryItems();
    }, [])

    async function loadGroceryItems() {
        const querySnapshot = await getDocs(
            query(
            collection(db, "grocery_items"),
            where("creatorId", "==", user!.uid)
            )
        );
        const myItems: GroceryItem[] = [];
        querySnapshot.forEach((doc) => {
            myItems.push({ ...doc.data(), id: doc.id } as GroceryItem);
        });
        setItems(myItems);
    }

    async function createGroceryItem() {
        if (!content) {
        return;
        }
        const item = {
        content: content,
        isCompleted: false,
        creatorId: user!.uid,
        }
        const docRef = await addDoc(collection(db, "grocery_items"), item);

        (item as GroceryItem).id = docRef.id;
        setItems([...items, item as GroceryItem]);
    }

    async function completeGroceryItem(item: GroceryItem) {
        item.isCompleted = true
        // TODO: Delete from database, remove from state
        setItems([...items])
    }

    return (
        <>
            <div className="widget__header">
                <div className="widget__title">Grocery List</div>
                <div className="widget__action">
                    {
                        flip === 0 ? 
                            <button onClick={() => setFlip(1)}>+</button>:
                        flip === 1 ?
                            <button onClick={() => setFlip(0)}>Back</button>:
                            <></>
                    }
                </div>
            </div>
            {
                flip === 0 ?
                    <div>{items.map(item => (
                        <p key={item.id}><input type="checkbox" checked={item.isCompleted} onChange={() => completeGroceryItem(item)}/>{item.content}</p>
                    ))}</div>:
                flip === 1 ?
                    <form onSubmit={(e) => {
                        if (content != null) {
                        createGroceryItem()
                        }
                        if (!addAnother) {
                            setFlip(0)
                        }
                        setContent("")      // Reset text field after submission
                        e.preventDefault()
                    }}>
                        <input type="text" placeholder="Grocery item..." value={content} onChange={(e) => setContent(e.target.value)} />
                        <p><input type="checkbox" checked={addAnother} onChange={() => {setAddAnother(!addAnother)}}/>Add another</p>
                        <input type="submit" value="Save" />
                    </form>:
                    <></>
            }
        </>
    )
}