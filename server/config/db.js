import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/blogapp`);
  } catch (error) {
    console.log("MongoDB connection failed" + error.message);
  }
};

export default connectDB;
