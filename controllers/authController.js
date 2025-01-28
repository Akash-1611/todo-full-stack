const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const registerUser = async (req,res) => {
    const {username,email,password} = req.body;
    console.log(username, email, password)
    try{
        const user = new User({username,email,password});
        await user.save();

        res.status(201).json({message:"user register success"});
         
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

const loginUser = async (req,res) => {
       const { email,password} = req.body;
       try{
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message : "user not found"});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message : "password not match"});

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.status(200).json({token});
       }catch(err){
        res.status(500).json({error:err.message});
       }
};


module.exports = { registerUser,loginUser};

