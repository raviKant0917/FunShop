import express from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './config/db.js'
import {app} from './app.js'

dotenv.config({path: './config/config.env'})
const port = process.env.PORT || 3000

//connecting to database
connectToDb()

app.listen(port,()=>{
    console.log('Server running on ',port);
})