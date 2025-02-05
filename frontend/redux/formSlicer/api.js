export const fetchApi = async () => {
    try {
        const response = await fetch("http://localhost:8080/form-data")
        if (!response.ok) {
            throw new Error("Error fetching form data")
        }
        const data = await response.json()
        console.log('Полученные данные:', data);
        return data
    } catch (error) {
        console.error("Ошибка:", error.message);
    }
}
export const fetchAdd = async (values) => {

    try {
        console.log(values)

        const response = await fetch("http://localhost:8080/form-data", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(values)
        })
        if (!response.ok) {
            throw new Error("Error posting form data")
        }
        const data = await response.json()
        console.log('Send data:', data);
        return data
    } catch (error) {
        console.error("Error:", error.message);
    }
}
export const fetchDelete = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/form-data/${id}`, {
            method: "DELETE"
        })
        if (!response.ok) {
            throw new Error("Error deleting form data")
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error:", error.message)
    }
}
export const fetchUpdate = async (id,values) => {
    try {
        const response = await fetch(`http://localhost:8080/form-data/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id,
                ...values,
            })
        })
        const data = await response.json()
        console.log('Send data:', data);
        return data
    } catch (error) {
        console.error("Error:", error.message)
    }
}