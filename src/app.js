const express = require ('express');
const app = express();

const path = require ('path');

app.use(express.static('public'));

app.listen(3000, () => console.log('Server running in http:/localhost:3000'));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html')));

app.get('/Registro', (req,res) => res.sendFile(path.resolve(__dirname, './views/registro.html')))

app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, './views/login.html')))