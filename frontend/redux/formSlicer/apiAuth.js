export const authFetchApi = async (values) => {
    try {
        const response = await fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        if (!response.ok) {
            throw new Error('Ошибка при отправке данных');
        }
        const data = await response.json()
        console.log(data)
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('currentUser', JSON.stringify(data.user.username));
        }
        return data
    } catch (err) {
        console.log(err, err.message);
    }
}
export const authGetUsers = async () => {
    try {
        const response = await fetch(`http://localhost:5000/login`);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        console.log(data)
        return data
    } catch (err) {
        console.log(err, err.message);
    }
}