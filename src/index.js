//require('dotenv').config({path:'./env'})  //it can also run the code

import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})





connectDB()
.then(()=>{
    app.on("error",(error)=>{
            console.log("ERR:",error)
            throw error
        })
    app.listen(process.env.P0RT || 8000,()=>{
        console.log(`server is running at port:${process.env.P0RT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!!!",err)
})







/*import express from express;

const app=express()
(async()=>{  //async is used bcz db is always in another continent
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR:",error)
            throw error
        })
        app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
    } catch (error) {
         console.log("ERR:",error)
            throw error
    }
})()*/