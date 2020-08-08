import React, { useContext } from 'react';
import Posts from '../../components/Posts/Posts';
import PageLayout from '../../components/PageLayout/PageLayout';
import InsertPost from '../../components/InsertPost/InsertPost';
import StudentContext from '../../Context';
import { Helmet } from 'react-helmet';

const PostsPage = () => {

    const context = useContext(StudentContext);

    return (
        <PageLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Posts</title>
            </Helmet>
            { context.user ? <InsertPost /> : null }
            <Posts to='all' />
        </PageLayout>
    )
}

export default PostsPage;