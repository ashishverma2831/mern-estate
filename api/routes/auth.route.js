const express = require('express');
const router = express.Router();
const User = require('../models/user.model.js')
const bcryptjs = require('bcryptjs');

router.post('/signup',async (req,res,next)=>{
    // console.log(req.body);
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword})
    try {
        await newUser.save();
        res.status(201).json('User Created Successfully')
    } catch (error) {
        // res.status(500).json(error.message)
        next(error);
    }
})

module.exports=router;