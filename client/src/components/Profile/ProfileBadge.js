import React from 'react';
import styles from './ProfileBadge.module.css';
import { Label } from 'semantic-ui-react';

const ProfileBadge = ({ firstName, lastName, studentClass, posts}) => {

    return (
        <div className={styles.badge}>
            <Label as='a' color='red' ribbon>
                Profile
            </Label>
            <div className={styles.name}>{ firstName + ' ' + lastName }</div>
            <div className={styles.info}>Grade: { studentClass }</div>
        </div>
    )
}

export default ProfileBadge;