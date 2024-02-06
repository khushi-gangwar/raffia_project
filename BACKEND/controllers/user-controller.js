import User from "../models/User.js";
import {validationResult} from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'KHUSHHHHH'

 //ROUTE 1:CREATE  A USER USING POST "api/auth/createUser".No login required.
const createUser=async (req,res)=>{  
    //If there are errors,return Bad request and error
const errors= validationResult (req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}    
//Check whether the user with this phone exists already or not
try{
    let user = await User.findOne({phone:req.body.phone});
    if(user){
        return res.status(400).json({error:'sorry a user with this phone already exists'})
    }
    //create a new user
    const salt= await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt)    
    user = await User.create({
        names:req.body.names,
        phone:req.body.phone,
        password:secPass,
    })
const data = {
    user:{
        id:user.id
    }
}
const authtoken = jwt.sign(data,JWT_SECRET);
    res.json({authtoken});
}
catch(err){
    console.log(err.message);
    res.status(500).send("some error occured")
}
};


//Route 2:Authenticate a user using: POST "api/auth".No login required.
const signup=async(req,res)=>{
    //If there are errors,return Bad request and the errors
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

const {phone,password}= req.body;
try{
let user=await User.findOne({phone});
if(!user){
    return res.status(400).json({error:"Please try to login with correct credentials"})
}
const passwordCompare= bcrypt.compare(password,user.password);
if(!passwordCompare){
    return res.status(400).json({error:"Please try to login with correct credentials"})
}
const data={
    user:{
        id:user.id
    }
}
const authtoken = jwt.sign(data,JWT_SECRET);
res.json({authtoken});
}catch(err){
console.log(err.message);
res.status(500).send("some error occured")
}
};


export default {createUser,signup}