const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();
// require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


const app = express();

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})
app.get('/',(req,res)=>{
    res.send('server express')
})