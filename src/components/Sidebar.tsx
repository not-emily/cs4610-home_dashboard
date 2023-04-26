import { useContext } from 'react';
import UserContext from "../context/user";
import {MdMenu, MdBreakfastDining, MdLunchDining, MdDinnerDining, MdBakeryDining, MdIcecream, MdLogout, MdPerson, MdArrowBack, MdAccountCircle} from 'react-icons/md'

export const Sidebar = (props: {state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const user = useContext(UserContext);
    return (
        <>
            <div className="sidebar__header">
                <MdAccountCircle className="sidebar__icon"/>
                <h1 className="sidebar__logo">{user!.email}</h1>
            </div>
            <div className="sidebar__items">
                <div className="item">
                    <MdLogout className="sidebar__icon"/>
                    <span className="sidebar__text">Logout</span>
                </div>
                <div className="sidebar__back item" onClick={() => props.setState(!props.state)}>
                    <MdArrowBack className="sidebar__icon"/>
                </div>
            </div>
        </>
    )
}