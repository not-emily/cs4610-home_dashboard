
export const Dashboard = () => {
    return (
        <>
        <div className="dashboard">
            <div className="col">
                <div className="widget widget__sm">
                    <div className="widget__title">Hello from Dashboard1</div>
                </div>
                <div className="widget widget__lg">
                    <div className="widget__title">Hello from Dashboard1</div>
                </div>
            </div>
            <div className="col">
                <div className="widget widget__lg">
                    <div className="widget__title">Hello from Dashboard2</div>
                </div>
                <div className="widget widget__sm">
                    <div className="widget__title">Hello from Dashboard2</div>
                </div>
            </div>
            <div className="col">
                <div className="widget widget__md">
                    <div className="widget__title">Hello from Dashboard3</div>
                </div>
                <div className="widget widget__md">
                    <div className="widget__title">Hello from Dashboard3</div>
                </div>
            </div>
        </div>
        </>
    )
}