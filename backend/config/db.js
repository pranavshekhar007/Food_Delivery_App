import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://pranavshekhar00:Golu2000@cluster0.p2ecf.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}