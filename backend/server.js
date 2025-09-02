import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import examRoutes from "./routes/examRoutes.js";

dotenv.config();

connectDB();

const app=express();
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth",authRoutes);
app.use("/api/exam",examRoutes);

app.get("/",async (req,res)=>{
    try{
        res.send("API is Running");
    }catch(err){
        res.send(err);
    }
})



const PORT=process.env.PORT||5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));

