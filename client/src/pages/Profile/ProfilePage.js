import React, { useContext } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import StudentContext from '../../Context';
import Posts from '../../components/Posts/Posts';
import InsertPost from '../../components/InsertPost/InsertPost';
import { Helmet } from 'react-helmet';

const ProfilePage = () => {

    const context = useContext(StudentContext);

    if (!context.user) {
        return <div>Loading...</div>;
    }

    return (
        <PageLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
            </Helmet>
            <InsertPost />
            <Posts to={`user/${context.user._id}`} />
        </PageLayout>
    )
}

export default ProfilePage;