import React, {FC} from 'react'
import styles from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

type PropsType = {
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
    const path = '/dialogs/' + props.id

    return (
        <div className={styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
