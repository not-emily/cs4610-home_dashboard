import { MdSettings } from "react-icons/md"
import { GroceryList } from "../widgets/GroceryList"
import { PetFeedingTracker } from "../widgets/PetFeedingTracker"
import { Weather } from "../widgets/Weather"
import { Timer } from "../widgets/Timer"
import { TodoList } from "../widgets/TodoList"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { ClockDate } from "../widgets/ClockDate"

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
                    <Weather />
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