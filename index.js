const express = require('express');
const app = express();
const product=require('./models/productModels.js/Product');
const register=require('./modles/Register/Register.js/Register');
// const mongoose = require('mongoose');
app.use(express.json());
app.get('/',(req,res) => {
    res.send('Welcome');
});
app.get('/node',(req,res) => {
    res.send('Welcome to node');
});
app.post('/product',async(req,res) => {
       try {
       const product =await product.create(req.body);
       res.status(200).json(product);
    }catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});
app.post('/register',async(req,res) => {
    try {
    const register =await register.create(req.body);
    res.status(200).json(register);
 }catch (error) {
     console.log(error.message);
     res.status(500).json({message: error.message});
 }
});

app.listen(3001,() => {
    console.log('listening on');
});
// mongoose.connect('mongodb://localhost')