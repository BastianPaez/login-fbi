
const form = document.querySelector('#form-login');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const {data} = await axios.post('/api/login', {email, password})
        console.log(data)
        sessionStorage.setItem('token', data.token)
        window.location.href = '/autorizado'
    } catch (error) {
        alert(error.response.data.msg)
    }
});

