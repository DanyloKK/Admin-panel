export const authFetchApi = async (values) => {
    try{
       const response = await fetch(`http://localhost:5000/register`,{
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
        return data
    }catch(err){
        console.log(err,err.message);
    }
}