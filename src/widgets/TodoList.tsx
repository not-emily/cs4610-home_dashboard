import { useContext, useEffect, useState } from "react"
import UserContext from "../context/user";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { MdAdd, MdArrowBack, MdRepeat, MdRestartAlt } from "react-icons/md";


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
    const [editItemDate, setEditItemDate] = useState("")
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

    // async function loadAllTodos() {
    //     const querySnapshot = await getDocs(
    //         query(
    //         collection(db, "todo_items"),
    //         where("creatorId", "==", user!.uid)
    //         )
    //     );
    //     querySnapshot.forEach((doc) => {
    //         setAllItems([...items, { ...doc.data(), id: doc.id } as TodoItem])
    //     });
    // }

    async function createTodoItem() {
        const today = GetDayOfWeek().toLowerCase().toString();
        if (!content) {
        return;
        }
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
        else {setAllItems([...allItems, item as TodoItem])}
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
            loadTodos()
            setFlip(0)
            newToast(`Updated ${itemContent}`, "success")
        } catch (err) {
            alert(err)
            newToast(`Error: Could not update ${itemContent}`, "error")
        }   
    }

    function removeDate(date: string) {
        const newDates = dates.filter(e => e !== date)
        setDates([...newDates])
    }

    function datesText(dates: string[]) : string {
        var text = "";
        dates.forEach(date => {
            if (date === "sunday") text += "Sun";
            else if (date === "monday") text += "Mon";
            else if (date === "tuesday") text += "Tue";
            else if (date === "wednesday") text += "Wed";
            else if (date === "thursday") text += "Thu";
            else if (date === "friday") text += "Fri";
            else if (date === "saturday") text += "Sat";
            if (dates[dates.length - 1] !== date) {
                text += ", "
            }
        })
        return text;
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
                                    <span className="todo-info">
                                        <p className={item.isCompleted ? "todo-info__name completed" : "todo-info__name"} onClick={() => {switchToEdit(item)}}>{item.content}</p>
                                        <p className="todo-info__dates">{item.repeat ? <MdRestartAlt />: <></>}{datesText(item.dates)}</p>
                                    </span>
                                </span>
                            ))}</div>
                            <button onClick={() => setFlip(3)}>View All</button>
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
                                <input type="submit" value="Save" />
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
                    flip === 3 ?
                        <div className="flip">
                            <div>{allItems.map(item => (
                                <span key={item.id} className="checklist-item">
                                    <span className="todo-info">
                                        <p className={item.isCompleted ? "todo-info__name completed" : "todo-info__name"} onClick={() => {switchToEdit(item)}}>{item.content}</p>
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