
document.addEventListener('DOMContentLoaded', async () => {

    const title = document.querySelector('#title')
    const token = sessionStorage.getItem('token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const {data} = await axios.get('/api/auth', config);
        console.log(data)
        title.textContent = `Autorizado... Hola ${data.email}`
    } catch (error) {
        title.textContent = 'No Autorizado'
    }

});
