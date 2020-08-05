import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import getNavigation from '../../utils/getNavigation';

const Header = () => {

    const [activeItem, setActiveItem] = useState('Home');

    const handleClick = (e, { name }) => {
        setActiveItem(name);
    }

    const links = getNavigation(false, undefined);

    return (
        <div className={styles.nav}>
            <Menu pointing size='huge'>                    
                    {
                        links.left.map(link => {
                            return <Menu.Item
                                    key={link.title}
                                    as={Link} to={link.path}
                                    name={link.title}
                                    active={activeItem === link.title}
                                    onClick={handleClick}
                                />
                        })
                    }
                    <Menu.Menu position='right'>
                    {    
                        links.right.map(link => {
                            return <Menu.Item
                                    key={link.title}
                                    as={Link} to={link.path}
                                    name={link.title}
                                    active={activeItem === link.title}
                                    onClick={handleClick}
                                />
                        })
                    }
                    </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header;