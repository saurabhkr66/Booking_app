import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import bcrypt from 'bcrypt';

dotenv.config({
    path:'./.env'
})

const app=express();

const bcryptSalt=bcrypt.genSaltSync(10);
app.use(express.json());
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
    const userDoc= await User.create({
        name,email,
        password:bcrypt.hashSync(password,bcryptSalt),
    })
    res.json(userDoc);
});
app.listen(4000);