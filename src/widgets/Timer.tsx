import { useContext, useEffect, useState } from "react"

export const Timer = () => {
    const [countDownTime, setCountDownTime] =  useState("00:00:00")
    // const [hours, setHours] = useState(0)
    // const [min, setMin] = useState(0)
    // const [sec, setSec] = useState(0)
    //const [totalTime, setTotalTime] = useState(0)
    const [intervalId, setIntervalId] = useState<NodeJS.Timer>()

    //let timer = null
    const startTimer = () => {
        console.log('start click', 'time is:', countDownTime)
        let totalTime = strToSec(countDownTime)
        const timer = setInterval(() => {
            //console.log('interval', totalTime)
            totalTime--;
            showTime(totalTime)
            if(totalTime <= 0) {
                clearInterval(timer)
            }
        }, 1000)
        setIntervalId(timer) 
    }
    
    const stopTimer = () => {
        clearInterval(intervalId)
    }
    
    const resetTimer = () => {
        setCountDownTime("00:00:00")
    }

    const strToSec = (time: string): number => {
        let total = 0
        console.log('turning time to sec', time)
        if(time !== ""){
            let hours = Number(time.split(":")[0])
            let min = Number(time.split(":")[1])
            let sec = Number(time.split(":")[2])
            total = (hours * 3600) + (min * 60) + sec
            console.log(hours, min, sec, '=', total)
        }
        else{
            console.log('no time')
        }
        return total
    }
    const showTime = (seconds: number) => {
        let min = Math.floor(seconds / 60)
        let hour = Math.floor(min / 60)
        let sec = Math.floor(seconds % 60)
        if(hour > 0){
            min = min % 60
        }
        console.log(hour, min, sec)
        const timeStr = (hour<10 ? '0': '') + hour + ":" + (min<10 ? '0' : '') + min + ":" + (sec<10 ? '0'  : '') + sec
        console.log(timeStr)
        setCountDownTime(timeStr)
    }

    return (
        <>
        <input className="timeInput" id="time" type="text" name="time" value={countDownTime} onChange={(e) => setCountDownTime(e.target.value)} />
        <div className="timeButtons">
            <button className="timerButton" id="start" onClick={startTimer}> Start </button> 
            <button className="timerButton" onClick={stopTimer}>Stop</button> 
            <button className="timerButton" onClick={resetTimer}>Reset</button>
        </div>
        
        </>
    )
}