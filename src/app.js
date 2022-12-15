const express = require ('express');
const app = express();

const path = require ('path');

app.use(express.static('public'));

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server running in http:/localhost:' + port));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html')));

app.get('/Registro', (req,res) => res.sendFile(path.resolve(__dirname, './views/registro.html')))

app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, './views/login.html')))