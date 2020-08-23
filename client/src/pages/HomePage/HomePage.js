import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Helmet } from 'react-helmet';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <PageLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Virtual School</title>
            </Helmet>
            <div className={styles.container}>
                Welcome to Virtual School!
            </div>
        </PageLayout>
    )
}

export default HomePage;