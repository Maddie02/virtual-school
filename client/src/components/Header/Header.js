import React, { useState, useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Header.module.css';
import getNavigation from '../../utils/getNavigation';
import StudentContext from '../../Context';


const Header = () => {

    const [activeItem, setActiveItem] = useState('');
    const context = useContext(StudentContext);
    const history = useHistory();

    const handleClick = (e, { name }) => {
        if (name === 'Log out') {
            context.logOut();
            history.push('/');
            return;
        }
        setActiveItem(name);
    }

    const links = getNavigation(context.loggedIn, context.user);

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