import { useContext, useEffect, useState } from "react"

export const ClockDate = () => {
    const [time, setTime] = useState("1:00 am")
    const [date, setDate] = useState("Mai 00, 2020")

    useEffect(() => {
        updateDate(new Date())
        updateTime()
        setInterval(updateTime, 15000);
    }, [])


    const updateTime = () => {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let am_pm = "am";
    
        if (hour > 12) {
            hour -= 12;
            am_pm = "pm";
        }
        if (hour == 12) {
            am_pm = "pm"
        }
        if (hour == 0) {
            if (min == 0) {
                updateDate(time)
            }
            hour = 12;
            am_pm = "am";
        }
    
        let minStr = min < 10 ? "0" + min : min;
  
        const currentTime = hour + ":" + minStr + am_pm;
        setTime(currentTime)
    }

    const updateDate = (date: Date) => {
        const options = {
            weekday: "short",
            month: 'long',
            day: 'numeric',
        } as const
        const dateStr = date.toLocaleString('en-us', options)

        setDate(dateStr)
    }

    return (
        <>
        <div className="widget__content clock">{time}</div>
        <div className="widget__content today"> {date}</div>
        </>
    )
}