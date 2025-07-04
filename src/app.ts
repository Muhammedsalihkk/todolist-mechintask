import express from 'express'
import todorouter from '../src/app/todo/router/router'
import userrouter from  '../src/app/user/router/router'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
const app=express()
dotenv.config()
mongoose.connect("mongodb://localhost:27017/Todolist")
app.use(cookieParser())
app.use(express.json())
app.use('/todo',todorouter)
app.use('/user',userrouter)
app.listen(2000,()=>{        
    console.log("server is running in 2000");
})