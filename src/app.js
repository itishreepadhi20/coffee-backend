import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()

//cors configuration
//It tells your backend:“Only allow requests from this specific frontend origin, and allow cookies/auth credentials to be sent.”
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//NOT TO CRASH SERVER BY ADDING UNNECESSARY CODES
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser()) 


//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)
//http://localhost:8000/api/v1/users/register
export {app}  