import mongoose from "mongoose";

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_DB_URI);
   } catch (error) {
      console.log("Error in connectDB", error.message);
   }
};

export default connectDB;
