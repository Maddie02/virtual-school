import React, { useContext } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import StudentContext from '../../Context';
import Posts from '../../components/Posts/Posts';

const ProfilePage = () => {

    const context = useContext(StudentContext);

    if (!context.user) {
        return <div>Loading...</div>;
    }

    return (
        <PageLayout>
            <Posts to={`user/${context.user._id}`} />
        </PageLayout>
    )
}

export default ProfilePage;