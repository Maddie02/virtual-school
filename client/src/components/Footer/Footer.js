import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>&copy; Copyright {new Date().getFullYear()}, Virtual School</footer>
    )
}

export default Footer;