import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://avatars.mds.yandex.net/i?id=90baeefbf60fd8427e5b14ae9b5ed3c6-4936646-images-thumbs&n=13&exp=1'
                alt=''/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post
