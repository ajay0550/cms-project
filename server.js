import "dotenv/config.js";
import dotenv from "dotenv"; 
dotenv.config()

import app from "./app.js"
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";


connectDB();
connectCloudinary();
const PORT = process.env.PORT; 

app.listen(PORT,(err,data)=>{
    if(err){
        console.log("Error starting server:", err);
    } else {
        console.log(`Listening on PORT ${PORT}`);
    }
})