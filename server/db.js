import mongoose from "mongoose";

const connection = {};

const opt = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectDB() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, opt);

  connection.isConnected = db.connections[0].readyState;
  if(connection.isConnected === 1){
    console.log("connected to database");
  } else {
    console.log("cannot connect to database");
  }
}

export default connectDB;