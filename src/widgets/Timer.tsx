import { useContext, useEffect, useState } from "react"

export const Timer = () => {
    const [countDownTime, setCountDownTime] =  useState("00:00:00")
    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    //const [interv, setInterv] = useState()

    //let timer = null
    const startTimer = () => {
        console.log('start click', 'time is:', countDownTime)
        let timer = setInterval(() => {
            setTotalTime(strToSec(countDownTime))
            //clearInterval(timer)
        }, 1000)
        clearInterval(timer)
    }
    // const stopTimer = () => {
    //     clearInterval(timer)
    // }

    const strToSec = (time: string): number => {
        let total = 0
        console.log('turning time to sec')
        if(time !== ""){
            setHours(Number(time.split(":")[0]))
            setMin(Number(time.split(":")[1]))
            setSec(Number(time.split(":")[2]))
            total = (hours * 3600) + (min * 60) + sec
            console.log(hours, min, sec, '=', total)
        }
        else{
            console.log('no time')
        }
        return total
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