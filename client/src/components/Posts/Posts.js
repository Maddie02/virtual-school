import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post/Post';

const Posts = ({ to }) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (isLoading === true) {
            axios.get(`http://localhost:5000/api/post/${to}`)
                 .then((response) => {
                    setIsLoading(false);
                    setPosts(response.data);
                 });
        }
    }, [isLoading, to, posts]);

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