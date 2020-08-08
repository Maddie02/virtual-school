import React, { useState, useContext } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Form, Button, Select } from 'semantic-ui-react';
import styles from './RegisterPage.module.css';
import authenticate from '../../utils/authenticate';
import Title from '../../components/Title/Title';
import StudentContext from '../../Context';
import { Helmet } from 'react-helmet';

const RegisterPage = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentClass, setStudentClass] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(StudentContext);

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onStudentClassChange = (e, data) => {
        setStudentClass(data.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await authenticate('http://localhost:5000/api/register', {
            firstName,
            lastName,
            email,
            password,
            studentClass
        }, (user) => {
            context.logIn(user);
            props.history.push('/');
        }, (e) => {
            console.log(e);
        })

    }

    const classOptions = [
        { key: 'eight', value: 8, text: '8'},
        { key: 'nine', value: 9, text: '9'},
        { key: 'ten', value: 10, text: '10'},
        { key: 'eleven', value: 11, text: '11'},
        { key: 'twelve', value: 12, text: '12'}     
    ];

    return (
        <PageLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
            <Form className={styles.form} onSubmit={handleSubmit} >
                <Title name="Register" />
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='Enter first name' onChange={onFirstNameChange} required />
                    <Form.Input fluid label='Last name' placeholder='Enter last name' onChange={onLastNameChange} required />
                    <Form.Field
                        required
                        onChange={onStudentClassChange}
                        value={studentClass}
                        control={Select}
                        label='Class'
                        options={classOptions}
                        placeholder='Class'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Email' placeholder='Enter email' onChange={onEmailChange} required />
                    <Form.Input fluid label='Password' placeholder='Enter password' type='password' onChange={onPasswordChange} required />
                </Form.Group>
                <Button className={styles.btn} primary type='submit'>Submit</Button>
            </Form>
        </PageLayout>
    )
}

export default RegisterPage;