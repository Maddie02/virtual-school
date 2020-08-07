import React, { useContext, useState, useEffect } from 'react';
import StudentContext from '../../Context';
import axios from 'axios';
import Post from '../Post/Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const context = useContext(StudentContext);

    useEffect(() => {
        setIsLoading(true);

        axios.get('http://localhost:5000/api/post/all')
             .then(response => {
                 setPosts(response.data);
                 setIsLoading(false);
             })
             .catch(err => {
                 console.log(err);
             })

        setIsLoading(false);
    }, [posts])

    const listPosts = () => {
        return posts.map(current => {
            return <Post post={current} key={current._id} />
        })
    }

    return (
        <div>
            {isLoading ? 
                <div>Loading...</div> :

                listPosts()
            }
        </div>
    )
}

export default Posts;