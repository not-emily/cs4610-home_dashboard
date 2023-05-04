import { useContext, useEffect, useState } from "react"

export const Timer = () => {
    const [countDownTime, setCountDownTime] =  useState("00:00:00")
    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const startTimer = () => {
        console.log('start click')
        const timer = setInterval(() => {
            const totalTime = strToSec(countDownTime)
        }, 1000)
    }

    const strToSec = (time: string) => {
        if(time !== ""){
            time.split(":")[0]
        }
    }

    return (
        <>
        <input className="timeInput" id="time" type="text" name="time" value={countDownTime} onChange={(e) => setCountDownTime(e.target.value)} />
        <div className="timeButtons">
            <button className="timerButton" id="start" onClick={startTimer}> Start </button> 
            <button className="timerButton">Stop</button> 
            <button className="timerButton">Reset</button>
        </div>
        
        </>
    )
}