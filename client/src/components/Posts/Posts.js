import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import StudentContext from '../../Context';

const Posts = ({ to }) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(StudentContext);

    
    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true);
            const promise = await axios.get(`http://localhost:5000/api/post/${to}`);
            setPosts(promise.data);
        }
        getPosts();
        setIsLoading(false);
    }, [to]);

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