import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://harshavardhan:8143424119@cluster0.ws8gn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}