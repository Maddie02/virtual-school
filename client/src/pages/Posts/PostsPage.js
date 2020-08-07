import React from 'react';
import Posts from '../../components/Posts/Posts';
import PageLayout from '../../components/PageLayout/PageLayout';

const PostsPage = () => {
    return (
        <PageLayout>
            <Posts to='all' />
        </PageLayout>
    )
}

export default PostsPage;