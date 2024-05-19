import express from 'express';
import cors from 'cors';

 app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
 }));
const app=express();
app.get('/test', (req, res) => {
    res.json('test ok')
});
app.listen(4000);