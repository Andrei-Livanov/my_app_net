import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const selectFontColor = () => link => link.isActive ? s.active : s.item

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={selectFontColor()}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'
                         className={selectFontColor()}>Massages</NavLink>
            </div>
            <div>
                <NavLink to='/users'
                         className={selectFontColor()}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={selectFontColor()}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={selectFontColor()}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings'
                         className={selectFontColor()}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
