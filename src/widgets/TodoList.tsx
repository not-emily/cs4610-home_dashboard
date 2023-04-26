import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { MdAdd, MdArrowBack, MdDelete, MdExpandMore, MdRepeat, MdRestartAlt, MdVisibility } from "react-icons/md";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




type TodoItem = {
  id: string,
  creatorId: string,
  content: string,
  isCompleted: boolean,
  dates: string[],
  repeat: boolean
}

type Toast = {
    message: string,
    type: "success" | "error" | "info"
}

const GetDayOfWeek = () => {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[today.getDay()]
}

export const TodoList = () => {
    const user = useContext(UserContext);
    const [flip, setFlip] = useState(0)
    const [items, setItems] = useState<TodoItem[]>([])
    const [allItems, setAllItems] = useState<TodoItem[]>([])
    const [content, setContent] = useState("")
    const [dates, setDates] = useState<String[]>([])
    const [repeat, setRepeat] = useState(false)

    const [itemIdToEdit, setItemIdToEdit] = useState("")
    const [editItemContent, setEditItemContent] = useState("")
    const [editItemDates, setEditItemDates] = useState<String[]>([])
    const [editItemRepeat, setEditItemRepeat] = useState(false)

    const [addAnother, setAddAnother] = useState(false)
    const [toast, setToast] = useState<Toast | null>(null)
    const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout>()

    useEffect(() => {
        loadTodos();
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

    async function loadTodos() {
        const today = GetDayOfWeek().toLowerCase().toString();
        const querySnapshot = await getDocs(
            query(
            collection(db, "todo_items"),
            where("creatorId", "==", user!.uid)
            )
        );
        const allTodos: TodoItem[] = [];
        querySnapshot.forEach((doc) => {
            allTodos.push({ ...doc.data(), id: doc.id } as TodoItem);
        });

        const todayItems = allTodos.filter(todo => todo.dates.includes(today))
        setItems(todayItems);
        setAllItems(allTodos)
    }

    async function createTodoItem() {
        if (!content) {
        return;
        }

        const today = GetDayOfWeek().toLowerCase().toString();
        if (dates.length === 0) dates.push(today)

        const item = {
            content: content,
            isCompleted: false,
            dates: dates,
            repeat: repeat,
            creatorId: user!.uid,
        }
        const docRef = await addDoc(collection(db, "todo_items"), item);

        (item as TodoItem).id = docRef.id;
        if(item.dates.includes(today)) {
            setItems([...items, item as TodoItem]);
        } 
        setAllItems([...allItems, item as TodoItem])
    }

    async function toggleCompletion(item: TodoItem) {
        item.isCompleted = !item.isCompleted
        setItems([...items])

        const taskDocRef = doc(db, 'todo_items', item.id)
        if (item.repeat) {
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
        }
        else {
            deleteTodo(item.id, item.content)
        }

    }

    async function deleteTodo(todoId: string, todoContent: string) {
        try {
            await deleteDoc(doc(db, "todo_items", todoId))
            newToast(`Completed "${todoContent}"`, "success")

            const newItems = items.filter(e => e.id != todoId)
            setItems(newItems)

            setEditItemContent("")
            setEditItemDates([])
            setEditItemRepeat(false)
            setItemIdToEdit("")
            setFlip(0)
        } catch(err) {
            alert(err)
            newToast(`Error: Could not complete "${todoContent}"`, "error")
        }
    }

    function switchToEdit(item: TodoItem) {
        setFlip(2)
        setItemIdToEdit(item.id)
        setEditItemContent(item.content)
        setEditItemDates(item.dates)
        setEditItemRepeat(item.repeat)
    }

    async function editTodoItem(itemContent: string, itemDates: String[], itemRepeat: boolean) {
        const today = GetDayOfWeek().toLowerCase().toString();
        if (itemDates.length === 0) itemDates.push(today)

        const taskDocRef = doc(db, 'todo_items', itemIdToEdit)
        try{
            await updateDoc(taskDocRef, {
                content: itemContent,
                dates: itemDates,
                repeat: itemRepeat
            })
            setItems([])
            loadTodos()
            setFlip(0)
            newToast(`Updated "${itemContent}"`, "success")
        } catch (err) {
            alert(err)
            newToast(`Error: Could not update "${itemContent}"`, "error")
        }   
    }

    function removeDate(date: string) {
        const newDates = dates.filter(e => e !== date)
        setDates([...newDates])
    }

    function removeEditDate(date: string) {
        const newDates = editItemDates.filter(e => e !== date)
        setEditItemDates([...newDates])
    }

    function datesText(dates: string[]) : string {
        var text = "";
        if (dates.includes("sunday")) text += "Sun ";
        if (dates.includes("monday")) text += "Mon ";
        if (dates.includes("tuesday")) text += "Tue ";
        if (dates.includes("wednesday")) text += "Wed ";
        if (dates.includes("thursday")) text += "Thu ";
        if (dates.includes("friday")) text += "Fri ";
        if (dates.includes("saturday")) text += "Sat ";
        return text;
    }

    function confirmDelete(todoId: string, todoContent: string) {
        console.log(`Trying to delete ${todoContent}`)
        const result = confirm(`Are you sure you want to delete "${todoContent}"?`)
        if (result) {
          deleteTodo(todoId, todoContent);
        }
    }

    return (
        <>
            <div className="widget__header">
                <div className="widget__title">Todo:</div>
                <div className="widget__action">
                    {
                        flip === 0 ? 
                            <Popup trigger={<button><MdExpandMore className="widget__action__icon"/></button>} position="bottom right">
                                <button className="fw-btn menu-btn" onClick={() => setFlip(1)}><MdAdd className="decor-icon" /> Add Todo </button>
                                <button className="fw-btn menu-btn" onClick={() => setFlip(3)}><MdVisibility className="decor-icon" /> View All </button>
                            </Popup>:
                        flip === 1 ?
                            <button onClick={() => setFlip(0)}><MdArrowBack className="widget__action__icon" /></button>:
                        flip === 2 ?
                            <button onClick={() => setFlip(0)}><MdArrowBack className="widget__action__icon" /></button>:
                        flip === 3 ?
                            <button onClick={() => setFlip(0)}><MdArrowBack className="widget__action__icon" /></button>:
                            <></>
                    }
                </div>
            </div>
            <div className="widget__content">
                {
                    flip === 0 ?
                        <>
                            <div>{items.map(item => (
                                <span key={item.id} className="checklist-item">
                                    <input type="checkbox" checked={item.isCompleted} onChange={() => toggleCompletion(item)}/>
                                    <span className="todo-info" onClick={() => {switchToEdit(item)}}>
                                        <p className={item.isCompleted ? "todo-info__name completed" : "todo-info__name"}>{item.content}</p>
                                        <p className="todo-info__dates">{item.repeat ? <MdRestartAlt className="decor-icon" />: <></>}{datesText(item.dates)}</p>
                                    </span>
                                </span>
                            ))}</div>
                        </>:
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
                                setDates([])
                                setRepeat(false)

                                e.preventDefault()
                            }}>
                                <input type="text" placeholder="Todo item..." value={content} onChange={(e) => setContent(e.target.value)} />
                                <span className="dates">
                                    <button type="button" className={dates.includes("sunday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {dates.includes("sunday") ? removeDate("sunday") : setDates([...dates, "sunday"])}}> Su </button>
                                    <button type="button" className={dates.includes("monday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {dates.includes("monday") ? removeDate("monday") : setDates([...dates, "monday"])}}> M </button>
                                    <button type="button" className={dates.includes("tuesday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {dates.includes("tuesday") ? removeDate("tuesday") : setDates([...dates, "tuesday"])}}> Tu </button>
                                    <button type="button" className={dates.includes("wednesday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {dates.includes("wednesday") ? removeDate("wednesday") : setDates([...dates, "wednesday"])}}> W </button>
                                    <button type="button" className={dates.includes("thursday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {dates.includes("thursday") ? removeDate("thursday") : setDates([...dates, "thursday"])}}> Th </button>
                                    <button type="button" className={dates.includes("friday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {dates.includes("friday") ? removeDate("friday") : setDates([...dates, "friday"])}}> F </button>
                                    <button type="button" className={dates.includes("saturday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {dates.includes("saturday") ? removeDate("saturday") : setDates([...dates, "saturday"])}}> Sa </button>
                                </span>
                                <p className="add-another"><input type="checkbox" checked={repeat} onChange={() => {setRepeat(!repeat)}} /> Repeat? </p>
                                <p className="add-another"><input type="checkbox" checked={addAnother} onChange={() => {setAddAnother(!addAnother)}}/>Add another</p>
                                <input className="fw-btn" type="submit" value="Save" />
                            </form>
                        </div>:
                    flip === 2 ?
                        <div className="flip">
                            <form onSubmit={(e) => {
                                if (editItemContent != null) {
                                    editTodoItem(editItemContent, editItemDates, editItemRepeat)
                                }

                                e.preventDefault()
                            }}>
                                <input type="text" value={editItemContent} onChange={(e) => setEditItemContent(e.target.value)} />
                                <span className="dates">
                                    <button type="button" className={editItemDates.includes("sunday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {editItemDates.includes("sunday") ? removeEditDate("sunday") : setEditItemDates([...editItemDates, "sunday"])}}> Su </button>
                                    <button type="button" className={editItemDates.includes("monday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {editItemDates.includes("monday") ? removeEditDate("monday") : setEditItemDates([...editItemDates, "monday"])}}> M </button>
                                    <button type="button" className={editItemDates.includes("tuesday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {editItemDates.includes("tuesday") ? removeEditDate("tuesday") : setEditItemDates([...editItemDates, "tuesday"])}}> Tu </button>
                                    <button type="button" className={editItemDates.includes("wednesday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {editItemDates.includes("wednesday") ? removeEditDate("wednesday") : setEditItemDates([...editItemDates, "wednesday"])}}> W </button>
                                    <button type="button" className={editItemDates.includes("thursday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {editItemDates.includes("thursday") ? removeEditDate("thursday") : setEditItemDates([...editItemDates, "thursday"])}}> Th </button>
                                    <button type="button" className={editItemDates.includes("friday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {editItemDates.includes("friday") ? removeEditDate("friday") : setEditItemDates([...editItemDates, "friday"])}}> F </button>
                                    <button type="button" className={editItemDates.includes("saturday") ? "date-btn date-btn__selected" : "date-btn date-btn__unselected"} onClick={() => {editItemDates.includes("saturday") ? removeEditDate("saturday") : setEditItemDates([...editItemDates, "saturday"])}}> Sa </button>
                                </span>
                                <p className="add-another"><input type="checkbox" checked={editItemRepeat} onChange={() => {setEditItemRepeat(!editItemRepeat)}} /> Repeat? </p>
                                <input className="fw-btn" type="submit" value="Save" />
                                <p><button className="fw-btn err-btn" onClick={() => {confirmDelete(itemIdToEdit, editItemContent)}}><MdDelete /> Delete </button></p>
                            </form>
                        </div>:
                    flip === 3 ?
                        <div className="flip">
                            <div>{allItems.map(item => (
                                <span key={item.id} className="checklist-item">
                                    <span className="todo-info" onClick={() => {switchToEdit(item)}}>
                                        <p className={item.isCompleted ? "todo-info__name completed" : "todo-info__name"}>{item.content}</p>
                                        <p className="todo-info__dates">{item.repeat ? <MdRestartAlt />: <></>}{datesText(item.dates)}</p>
                                    </span>
                                </span>
                            ))}</div>

                        </div>:
                        <></>
                }
            </div>
            { toast != null ? <div className={`toast toast--${toast.type}`}>{toast.message}</div> : <></> }
        </>
    )
}