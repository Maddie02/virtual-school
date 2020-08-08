import React from 'react';
import styles from './Teacher.module.css';

const Teacher = ({ firstName, lastName, subject }) => {
    return (
        <div className={styles.card}>
            <h1>{ firstName + ' ' + lastName }</h1>
            <p className={styles.meta}>Teacher in TUES</p>
            <p className={styles.description}>{firstName} is teaching <em>{subject}</em>.</p>
        </div>
    )
}

export default Teacher;