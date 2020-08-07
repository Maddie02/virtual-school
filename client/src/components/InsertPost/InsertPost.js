import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import styles from './InsertPost.module.css';
import Title from '../../components/Title/Title';
import axios from 'axios';
import getCookie from '../../utils/cookie';

const InsertPost = () => {

    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = getCookie('x-auth-token');

        await axios.post('http://localhost:5000/api/post/', {
                description
            }, { 
                headers: {
                'Authorization': token,
            }
        })
        .then(() => setDescription(''));
    }

    return (
        <>
            <div className={styles.box}>
                <Title name="Share a post" />
                <Form className={styles.form} onSubmit={handleSubmit} >
                    <Form.TextArea className={styles.area} value={description} placeholder='What is on your mind?' onChange={(e) => setDescription(e.target.value)} />
                    <Button
                        color='twitter'
                        type="submit"
                        className={styles.btn}
                        floated='right'
                    >
                        Post
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default InsertPost;