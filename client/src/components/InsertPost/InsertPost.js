import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import styles from './InsertPost.module.css';
import Title from '../../components/Title/Title';

const InsertPost = () => {
    return (
        <>
            <div className={styles.box}>
                <Title name="Share a post" />
                <Form className={styles.form}>
                    <Form.TextArea className={styles.area} placeholder='What is on your mind?' />
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