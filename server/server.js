import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import http from "http"
import { connectDB } from "./database/database.js";

//create express app using http server because socket io works with http server
const app = express();
const server = http.createServer(app)
dotenv.config();

//Middleware
app.use(express.json({limit: '5mb'}));
app.use(cors())

app.use("/api/status", (req, res) => res.send("API is running..."));

const port = process.env.PORT || 3000;
mongoose.set("strictQuery", false);


await connectDB().then(()=>{
    server.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})
})
