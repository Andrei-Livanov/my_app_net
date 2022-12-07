import React, {FC} from 'react'
import styles from './Message.module.css'

type PropsType = {
    message: string
}

const Message: FC<PropsType> = (props) => {
    return (
        <div>
            <div className={styles.message}>{props.message}</div>
        </div>
    )
}

export default Message
