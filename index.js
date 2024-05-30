import express from 'express';
import 'dotenv/config';
import loginRoute from './routes/user.route.js'

const app = express();

const __dirnname = import.meta.dirname;

app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use(express.static('public'))

app.get('/login', (req, res) => {
  res.sendFile(__dirnname + '/public/login.html')
})

app.get('/autorizado', (req, res) => {
  res.sendFile(__dirnname + '/public/autorizado.html')
})

app.get('/', (req, res) => {
  res.redirect('/login');
})


app.use('/api', loginRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
