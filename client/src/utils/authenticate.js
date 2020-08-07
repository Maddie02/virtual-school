const authenticate = async (url, body, onSuccess, onFailure) => {
    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const authToken = promise.headers.get('Authorization');
        document.cookie = `x-auth-token=${authToken}`;

        const response = await promise.json();

        if (response.email && authToken) {
            onSuccess({
                id: response._id,
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                studentClass: response.studentClass
            })
        } else {
            onFailure();
        }
    } catch (e) {
        onFailure(e);
    }
}

export default authenticate;