import React from 'react';

const StudentContext = React.createContext({
    loggedIn: false,
    user: null,
    logIn: () => {},
    logOut: () => {}
});

export default StudentContext;