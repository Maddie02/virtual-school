import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Form, Button } from 'semantic-ui-react';
import styles from './LoginPage.module.css';
import Title from '../../components/Title/Title';
import authenticate from '../../utils/authenticate';
import StudentContext from '../../Context';
import { Helmet } from 'react-helmet';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const context = useContext(StudentContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await authenticate('http://localhost:5000/api/login', {
            email,
            password
        }, (user) => {
            /* Use context */
            context.logIn(user);
            history.push('/');
        }, (e) => {
            setError(e || 'Invalid credentials');
            setEmail('');
            setPassword('');
        })
    }

    return (
        <PageLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
            <Form className={styles.form} onSubmit={handleSubmit}>
                <Title name="Login" />
                <Form.Group widths='equal'>
                    <Form.Input fluid value={email} label="Email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} required />
                    <Form.Input fluid value={password} label='Password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} type="password" required />
                </Form.Group>
                <Button className={styles.btn} primary type='submit'>Login</Button>
                <div>{error}</div>
            </Form>
        </PageLayout>
    )
}

export default LoginPage;