import express from 'express';
import cors from 'cors';
import {max} from "math";

const app = express();

const port =3000;
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello world!');
})
app.get('/max',(req,res)=>{
    res.send(max([1,5]));
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})