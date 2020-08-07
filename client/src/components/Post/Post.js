import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

    return (
        <div className={styles.post}>
            <h1>{props.post.authorName}</h1>
            <span className={styles.date}>
                Posted on&nbsp;
            { new Date(props.post.created_at).toDateString() }
            </span>
            <p className={styles.desc}> {props.post.description} </p>
        </div>
    )
}

export default Post;