import React, { useContext } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import StudentContext from '../../Context';

const ProfilePage = () => {

    const context = useContext(StudentContext);
    console.log(context);

    return (
        <PageLayout>
            <h1>Hello</h1>
        </PageLayout>
    )
}

export default ProfilePage;