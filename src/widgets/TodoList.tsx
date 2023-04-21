import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { MdAdd, MdArrowBack } from "react-icons/md";


type TodoItem = {
  id: string,
  creatorId: string,
  content: string,
  isCompleted: boolean,
}

type Toast = {
    message: string,
    type: "success" | "error" | "info"
}

export const TodoList = () => {
    const user = useContext(UserContext);
    const [flip, setFlip] = useState(0)
    const [items, setItems] = useState<TodoItem[]>([])
    const [content, setContent] = useState("")
    const [itemIdToEdit, setItemIdToEdit] = useState("")
    const [editItemContent, setEditItemContent] = useState("")
    const [addAnother, setAddAnother] = useState(false)
    const [toast, setToast] = useState<Toast | null>(null)
    const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout>()

    useEffect(() => {
        loadTodoItems();
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
            setItemIdToEdit("")
            setEditItemContent("")
        }
    }, [flip])

    function newToast(message: string, type: string) {
        setToast({message, type} as Toast)
    }

    async function loadTodoItems() {
        const querySnapshot = await getDocs(
            query(
            collection(db, "todo_items"),
            where("creatorId", "==", user!.uid)
            )
        );
        const myItems: TodoItem[] = [];
        querySnapshot.forEach((doc) => {
            myItems.push({ ...doc.data(), id: doc.id } as TodoItem);
        });
        setItems(myItems);
    }

    async function createTodoItem() {
        if (!content) {
        return;
        }
        const item = {
        content: content,
        isCompleted: false,
        creatorId: user!.uid,
        }
        const docRef = await addDoc(collection(db, "todo_items"), item);

        (item as TodoItem).id = docRef.id;
        setItems([...items, item as TodoItem]);
    }

    async function toggleCompletion(item: TodoItem) {
        item.isCompleted = !item.isCompleted
        setItems([...items])

        const taskDocRef = doc(db, 'todo_items', item.id)
        try{
            await updateDoc(taskDocRef, {
                isCompleted: item.isCompleted
            })
            if (item.isCompleted) {
                newToast(`Completed "${item.content}"`, "success")
            } else {
                newToast(`Marked "${item.content}" as incomplete`, "info")
            }
        } catch (err) {
            alert(err)
            newToast(`Error: Could not update "${item.content}"`, "error")
        }   

        // try {
        //     await deleteDoc(doc(db, "todo_items", item.id))
        //     newToast(`Completed ${item.content}`, "success")
        // } catch(err) {
        //     alert(err)
        //     newToast(`Error: Could not complete ${item.content}`, "error")
        // }

        // const newItems = items.filter(e => e.id != item.id)
        // setItems(newItems)
    }

    function switchToEdit(item: TodoItem) {
        setFlip(2)
        setItemIdToEdit(item.id)
        setEditItemContent(item.content)
    }

    async function editTodoItem(itemContent: string) {
        const taskDocRef = doc(db, 'todo_items', itemIdToEdit)
        try{
            await updateDoc(taskDocRef, {
            content: itemContent
            })
            setItems([])
            loadTodoItems()
            setFlip(0)
            newToast(`Updated ${itemContent}`, "success")
        } catch (err) {
            alert(err)
            newToast(`Error: Could not update ${itemContent}`, "error")
        }   
    }


    return (
        <>
            <div className="widget__header">
                <div className="widget__title">Todo:</div>
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
                        <div>{items.map(item => (
                            <span key={item.id} className="checklist-item">
                                <input type="checkbox" checked={item.isCompleted} onChange={() => toggleCompletion(item)}/>
                                <p className={item.isCompleted ? "completed" : ""} onClick={() => {switchToEdit(item)}}>{item.content}</p>
                            </span>
                        ))}</div>:
                    flip === 1 ?
                        <div className="flip">
                            <form onSubmit={(e) => {
                                if (content != null) {
                                createTodoItem()
                                }
                                if (!addAnother) {
                                    setFlip(0)
                                }
                                setContent("")      // Reset text field after submission
                                e.preventDefault()
                            }}>
                                <input type="text" placeholder="Todo item..." value={content} onChange={(e) => setContent(e.target.value)} />
                                <input type="submit" value="Save" />
                                <p className="add-another"><input type="checkbox" checked={addAnother} onChange={() => {setAddAnother(!addAnother)}}/>Add another</p>
                            </form>
                        </div>:
                    flip === 2 ?
                        <div className="flip">
                            <form onSubmit={(e) => {
                                if (editItemContent != null) {
                                    editTodoItem(editItemContent)
                                }

                                e.preventDefault()
                            }}>
                                <input type="text" value={editItemContent} onChange={(e) => setEditItemContent(e.target.value)} />
                                <input type="submit" value="Save" />
                            </form>
                        </div>:
                        <></>
                }
            </div>
            { toast != null ? <div className={`toast toast--${toast.type}`}>{toast.message}</div> : <></> }
        </>
    )
}