import React, {FC} from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm, {AddPostFormValuesType} from './AddPostForm/AddPostForm'
import {PostType} from '../../../types/types'

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: FC<MapPropsType & DispatchPropsType> = props => {
    const postsElements =
        [...props.posts].reverse().map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized
