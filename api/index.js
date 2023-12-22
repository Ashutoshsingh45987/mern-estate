import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{console.log("error");});

const App = express();

App.listen(3000,()=>{
    console.log("The server is running on port 3000");
}); 