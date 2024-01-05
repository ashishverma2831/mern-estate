const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route.js')
const authRouter = require('./routes/auth.route.js')

dotenv.config();
// require('dotenv').config();

mongoose.connect('mongodb+srv://root:root@mern-estate.byjriil.mongodb.net/mern-estate?retryWrites=true&w=majority')
// mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


const app = express();
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})
// app.get('/test',(req,res)=>{
//     res.send('server express')
// })
// app.get('/test',(req,res)=>{
//     res.json({
//         message:'Hello express'
//     })
// })
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)