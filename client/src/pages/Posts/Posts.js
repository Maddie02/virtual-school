import React, { useContext } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import StudentContext from '../../Context';

const Posts = () => {

    const context = useContext(StudentContext);

    console.log(context);

    return (
        <PageLayout>

        </PageLayout>
    )
}

export default Posts;