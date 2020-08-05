import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

    const [activeItem, setActiveItem] = useState('home');

    const handleClick = (e, { name }) => {
        setActiveItem(name);
    }

    return (
        <div className={styles.nav}>
            <Menu pointing size='huge'>
                <Menu.Item
                    as={Link} to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleClick}
                />
                <Menu.Item
                    as={Link} to='/teachers'
                    name='teachers'
                    active={activeItem === 'teachers'}
                    onClick={handleClick}
                />
                <Menu.Item
                    as={Link} to='/program'
                    name='program'
                    active={activeItem === 'program'}
                    onClick={handleClick}
                />
                <Menu.Item
                    as={Link} to='/posts'
                    name='posts'
                    active={activeItem === 'posts'}
                    onClick={handleClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        as={Link} to='/register'
                        name='register'
                        active={activeItem === 'register'}
                        onClick={handleClick}
                    />
                    <Menu.Item
                        as={Link} to='/login'
                        name='login'
                        active={activeItem === 'login'}
                        onClick={handleClick}
                    />
                    <Menu.Item
                        as={Link} to='/profile'
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={handleClick}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header;