const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3001, ()=>{
    console.log('Servidor funcionando en el puerto 3001');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
