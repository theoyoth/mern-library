import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config()

import route from "./route.js";
import connectDB from "./db.js";

const app = express();

app.use(cors({origin:["http://127.0.0.1:5173","https://booklibrary.vercel.app"]}));

app.use(express.json());
connectDB();
app.use(route);

app.listen(3001,() => {
    console.log("server running on port 3001");
})