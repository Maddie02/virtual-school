import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Form, Button, Select } from 'semantic-ui-react';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {

    const classOptions = [
        { key: 'eight', value: 8, text: '8'},
        { key: 'nine', value: 9, text: '9'},
        { key: 'ten', value: 10, text: '10'},
        { key: 'eleven', value: 11, text: '11'},
        { key: 'twelve', value: 12, text: '12'}     
    ];

    return (
        <PageLayout>
            <Form className={styles.form}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='Enter first name' required />
                    <Form.Input fluid label='Last name' placeholder='Enter last name' required />
                    <Form.Field
                        required
                        control={Select}
                        label='Class'
                        options={classOptions}
                        placeholder='Class'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Email' placeholder='Enter email' required />
                    <Form.Input fluid label='Password' placeholder='Enter password' type='password' required />
                </Form.Group>
                <Button className={styles.btn} primary type='submit'>Submit</Button>
            </Form>
        </PageLayout>
    )
}

export default RegisterPage;