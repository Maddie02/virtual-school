const getNavigation = (loggedIn, user) => {
    const authLinks = {
        left: [
            {
                title: 'Home',
                path: '/',
            },
            {
                title: 'Teachers',
                path: '/teachers'
            },
            {
                title: 'Program',
                path: '/program'
            },
            {
                title: 'Posts',
                path: '/posts'
            }
        ],
        right: [
            {
                title: 'Profile',
                path: `/profile/${user && user.id}`,
                position: 'right'
            },
            {
                title: 'Log out',
                path: '/logout',
                position: 'right'
            }
        ]
    }

    const publicLinks = {
        left: [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'Posts',
                path: '/posts'
            }
        ],
        right: [
            {
                title: 'Register',
                path: '/register',
                position: 'right'
            },
            {
                title: 'Login',
                path: '/login',
                position: 'right'
            }
        ],
    }

    return loggedIn ? authLinks : publicLinks;
}

export default getNavigation;