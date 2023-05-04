import { MdSettings } from "react-icons/md"
import { GroceryList } from "../widgets/GroceryList"
import { PetFeedingTracker } from "../widgets/PetFeedingTracker"
import { TodoList } from "../widgets/TodoList"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { ClockDate } from "../widgets/ClockDate"
import { Timer } from "../widgets/Timer"

export const Dashboard = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
        <div className={isExpanded ? "sidebar" : "sidebar collapsed"}>
            <Sidebar state={isExpanded} setState={setIsExpanded}/>
        </div>
        <div className="dashboard">
            <div className="col">
                <div className="widget widget__sm">
                    <ClockDate />
                </div>
                <div className="widget widget__lg">
                    <TodoList />
                </div>
            </div>
            <div className="col">
                <div className="widget widget__lg">
                    <GroceryList />
                </div>
                <div className="widget widget__sm">
                    <div className="widget__title">Hello from Dashboard2</div>
                </div>
            </div>
            <div className="col">
                <div className="widget widget__md">
                    <PetFeedingTracker />
                </div>
                <div className="widget widget__md">
                    <Timer />
                </div>
            </div>
            <div className="settings">
                <button onClick={() => setIsExpanded(true)}><MdSettings /></button>
            </div>
        </div>
        </>
    )
}