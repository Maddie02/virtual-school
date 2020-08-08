import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <PageLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Virtual School</title>
            </Helmet>
        </PageLayout>
    )
}

export default HomePage;