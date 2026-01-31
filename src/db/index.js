import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{  //async is used bcz db is always in another continent
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`\n MONGODB connected sucessfully:${connectionInstance.connection.host}`)
    }

    
     catch (error) {
         console.log("MONGODB connection error:",error)
         //console.error("MONGODB connection error:", error.message);
            process.exit(1); //it informs->“The app crashed because something went wrong.”
    }
}

export default connectDB 