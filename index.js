const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('Welcome');
});
app.get('/node',(req,res) => {
    res.send('Welcome to node');
});
app.listen(3001,() => {
    console.log('listening on');
});