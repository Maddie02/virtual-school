import React, { useState } from 'react';
import StudentContext from './Context';

const App = (props) => {

    const [loggedIn, setLoggedIn] = useState(null);
    const [loading, setLoading] = useState(null);
    const [user, setUser] = useState(null);

    const logIn = (user) => {
        setLoggedIn(true);
        setUser(user);
    }

    const logOut = () => {
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