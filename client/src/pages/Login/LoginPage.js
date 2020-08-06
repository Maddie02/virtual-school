import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Form, Button } from 'semantic-ui-react';
import styles from './LoginPage.module.css';
import Title from '../../components/Title/Title';

const LoginPage = () => {
    return (
        <PageLayout>
            <Form className={styles.form} >
                <Title name="Login" />
                <Form.Group widths='equal'>
                    <Form.Input fluid label="Email" placeholder='Enter email' required />
                    <Form.Input fluid label='Password' placeholder='Enter password' type="password" required />
                </Form.Group>
                <Button className={styles.btn} primary type='submit'>Login</Button>
            </Form>
        </PageLayout>
    )
}

export default LoginPage;