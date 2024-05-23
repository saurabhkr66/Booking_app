import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User  from './models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
dotenv.config({
    path:'./.env'
})

const app=express();

const bcryptSalt=bcrypt.genSaltSync(10);
const jwtsecret='jgvdgvgfglgflgklgh76765bjffdgf';
app.use(express.json());
app.use(cookieParser());
 app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
 }));
 
 mongoose.connect(process.env.MONGO_URL);
//  COHG5fOXPvKLYGkg

app.get('/test', (req, res) => {
    res.json('test ok')
});
app.post('/register', async (req, res) => {
    const {name,email,password}=req.body;
    try {
        const userDoc= await User.create({
            name,email,
            password:bcrypt.hashSync(password,bcryptSalt),
        });
        res.json(userDoc);
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Registration failed' });
        
    }
});
app.post('/login',async (req, res) => {
    const {email,password}=req.body;
    const userDoc=await User.findOne({email});
    if(userDoc) {
        
     const passok=bcrypt.compareSync(password,userDoc.password);
     if(passok){
        jwt.sign({email:userDoc.email,
            id:userDoc._id,
            },
            jwtsecret,{},(err,token)=>{
            if(err){
                throw err;
            }
        
        res.cookie('token',token).json(userDoc)
        });
     }else{
        res.status(422).json('password not match');
     }
    }else{
        res.json('not found');
    }
})
app.get('/profile', (req, res)=>{
    const {token}=req.cookies;
    if(token){
jwt.verify(token,jwtsecret,{},async (err,userdata)=>{
        if(err) throw err;
        const {name,email,_id}=await User.findById(userdata.id);
        res.json({name,email,_id});
})
    }else{
        res.json(null);
    }
 
})
app.listen(4000);