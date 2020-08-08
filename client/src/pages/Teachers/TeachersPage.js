import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Helmet } from 'react-helmet';
import Teachers from '../../components/Teachers/Teachers';

const TeachersPage = () => {

    return (
        <PageLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Teachers</title>
            </Helmet>
            <Teachers />
        </PageLayout>
    )
}

export default TeachersPage;