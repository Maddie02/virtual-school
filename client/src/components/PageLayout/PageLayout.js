import React from 'react';
import Header from '../Header/Header';
import styles from './PageLayout.module.css';
import Footer from '../Footer/Footer';

const PageLayout = (props) => {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.container}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout;