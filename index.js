import mongoose from "mongoose";
import app from "./app.js";

(async ()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/gitsetup')
       
       app.listen(5000, ()=>{
        console.log('App is listening on http://localhost:5000');
       })
    } catch (error) {
        console.error('error: ', error)
        throw error
    }
})()