import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from 'dotenv'
dotenv.config()

import route from "./route.js";
import connectDB from "./db.js";

const app = express();

app.use(cookieParser())
app.use(cors({origin:['https://booklibraryapp.vercel.app','http://127.0.0.1:5173','https://mern-library-api.vercel.app','http://localhost:3000'],methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}));
app.use(express.json());
app.use(route);
connectDB();

app.listen(3001,() => {
    console.log("server running on port 3001");
})