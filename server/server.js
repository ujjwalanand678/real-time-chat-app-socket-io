import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log("error");
  }
};


connectDB().then(()=>{
    app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})
})
