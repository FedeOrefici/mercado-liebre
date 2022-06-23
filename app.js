const express = require('express');
const app = express();

//middleware
app.use(express.static('public'));
// app.set('puerto', process.env.PORT || 3001);

//rutas
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

// app.listen(app.get('puerto')), ()=> console.log(`'server working' ${app.get('puerto')}`);

// app.listen(process.env.PORT || 3000, function(){
//     console.log("servidor corriendo en el puerto 3000")
// });