import React from 'react';

const StudentContext = React.createContext({
    loggedIn: false,
    student: null,
    logIn: () => {},
    logOut: () => {}
});

export default StudentContext;