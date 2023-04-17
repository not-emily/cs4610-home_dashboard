import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";


type TodoItem = {
  id: string,
  creatorId: string,
  content: string,
  isCompleted: boolean,
}

type Toast = {
    message: string,
    type: "success" | "error"
}

export const TodoList = () => {
    const user = useContext(UserContext);
    const [flip, setFlip] = useState(0)
    const [items, setItems] = useState<TodoItem[]>([])
    const [content, setContent] = useState("")
    const [addAnother, setAddAnother] = useState(false)
    const [toast, setToast] = useState<Toast | null>(null)

    useEffect(() => {
        loadTodoItems();
    }, [])

    useEffect(() => {
        if (toast != null) {
          setTimeout(() => {
            setToast(null)
          }, 3000)
        }
      });

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

    async function completeTodoItem(item: TodoItem) {
        item.isCompleted = true
        deleteDoc(doc(db, "todo_items", item.id))

        const newItems = items.filter(e => e.id != item.id)
        setItems(newItems)

        newToast(`Completed ${item.content}`, "success")
    }

    return (
        <>
            <div className="widget__header">
                <div className="widget__title">Todo:</div>
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
            <div className="widget__content">
                {
                    flip === 0 ?
                        <div>{items.map(item => (
                            <p key={item.id}><input type="checkbox" checked={item.isCompleted} onChange={() => completeTodoItem(item)}/>{item.content}</p>
                        ))}</div>:
                    flip === 1 ?
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
                            <p><input type="checkbox" checked={addAnother} onChange={() => {setAddAnother(!addAnother)}}/>Add another</p>
                            <input type="submit" value="Save" />
                        </form>:
                        <></>
                }
            </div>
            { toast != null ? <div className={`toast toast--${toast.type}`}>{toast.message}</div> : <></> }
        </>
    )
}