//require('dotenv').config({path:'./env'})  //it can also run the code
import { app } from "./app.js";
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
console.log("PORT:", process.env.PORT);



 

connectDB()
//when async method completes it returns a promise so we use it
.then(()=>{
    app.on("error",(error)=>{
            console.log("ERR:",error)
            throw error
        })
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`server is running at port:${process.env.PORT}`)
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