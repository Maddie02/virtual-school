import React, { useContext, useState, useEffect } from 'react';
import StudentContext from '../../Context';
import Teacher from '../Teacher/Teacher';
import axios from 'axios';
import styles from './Teachers.module.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const context = useContext(StudentContext);

    useEffect(() => {
        const user = context.user;
        if (user) {
            axios.get(`http://localhost:5000/api/teacher/${user.studentClass}`)
                 .then(response => {
                     setTeachers(response.data);
                 })
                 .catch(e => {
                     console.log(e);
                 })
        }
    }, [context.user])
    
    const listTeachers = () => {
        return teachers.map(teacher => {
            return <Teacher {...teacher} key={teacher._id} />
        })
    }

    return (
        <div className={styles.grid}>
            { listTeachers() }
        </div>
    )
}

export default Teachers;