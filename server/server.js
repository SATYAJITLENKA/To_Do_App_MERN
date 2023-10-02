import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// import router from './routes/toDoRoutes.js'
import router from './routes/toDoRoutes.js'

dotenv.config({path:"./dotenv/.env"})
const app=express();

app.use(express.json())
app.use(cors())

let port=process.env.PORT || 5000;


app.use('/api',router)

app.listen(port,()=>{
    mongoose.connect(process.env.URL)
    .then(()=>console.log("database is connected"))
    .catch((error)=>console.log(error))
    console.log(`server is running on the port ${port}`)
})