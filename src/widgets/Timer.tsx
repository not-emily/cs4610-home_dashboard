import { useContext, useEffect, useState } from "react"

export const Timer = () => {
    const [counter, setCounter] = useState(59)
    
    

    return (
        <>Timer widget {counter}</>
    )
}