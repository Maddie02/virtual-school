import React, { useState, useEffect } from 'react';
import StudentContext from './Context';
import getCookie from './utils/cookie';

const App = (props) => {

    const [loggedIn, setLoggedIn] = useState(null);
    const [loading, setLoading] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie('x-auth-token');

        if (!token) {
            logOut();
            setLoading(false);
            return;
        }

        fetch('http://localhost:5000/api/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(promise => {
            return promise.json();
        }).then(response => {
            if (response.status) {
                logIn(response.user);
            } else {
                logOut();
            }
        })
        setLoading(false);
    }, [])  

    const logIn = (user) => {
        setLoggedIn(true);
        setUser(user);
    }

    const logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"

        setLoggedIn(false);
        setUser(null);
    }

    if (loading === null) {
        return <div>Loading...</div>
    }


    return (
        <StudentContext.Provider value={{
            loggedIn,
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </StudentContext.Provider>
    )
    
}

export default App;