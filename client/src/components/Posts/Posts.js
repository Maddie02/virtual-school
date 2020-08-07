import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post/Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () => {
        setIsLoading(true);
        const promise = await axios.get('http://localhost:5000/api/post/all');
        setPosts(promise.data);
    }

    useEffect(() => {
        getPosts();
        setIsLoading(false);
    }, [posts]);

    const listPosts = () => {
        return posts.map(current => {
            return <Post post={current} key={current._id} />
        })
    }

    if (isLoading === true) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            { listPosts() }
        </div>
    )
}

export default Posts;