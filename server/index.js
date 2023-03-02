import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config()

import route from "./route.js";
import connectDB from "./db.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(route);
connectDB();

app.listen(3001,() => {
    console.log("server running on port 3001");
})