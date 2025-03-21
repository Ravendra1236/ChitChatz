import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB connected.");
  } catch (err) {
    console.log("MongoDB Connection not established");
    process.exit() ; 
  }
};

