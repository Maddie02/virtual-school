import React, { useContext } from 'react';
import Posts from '../../components/Posts/Posts';
import PageLayout from '../../components/PageLayout/PageLayout';
import InsertPost from '../../components/InsertPost/InsertPost';
import StudentContext from '../../Context';

const PostsPage = () => {

    const context = useContext(StudentContext);

    return (
        <PageLayout>
            { context.user ? <InsertPost /> : null }
            <Posts to='all' />
        </PageLayout>
    )
}

export default PostsPage;