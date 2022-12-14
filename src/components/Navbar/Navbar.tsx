import React, {FC} from 'react'
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar: FC = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' className={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.activeLink}`}>
                <NavLink to='/dialogs' className={styles.active}>Massages</NavLink>
            </div>
            <div className={`${styles.item} ${styles.activeLink}`}>
                <NavLink to='/users' className={styles.activeLink}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
