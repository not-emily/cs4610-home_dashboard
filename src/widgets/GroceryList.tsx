import { useState } from "react"

export const GroceryList = () => {
    const [flip, setFlip] = useState(0)

    return (
        <>
            <div className="widget__header">
                <div className="widget__title">Grocery List</div>
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

                {
                    flip === 0 ?
                        <p>This is the front of the widget</p>:
                    flip === 1 ?
                        <p>This is the back of the widget</p>:
                        <></>
                }
        </>
    )
}