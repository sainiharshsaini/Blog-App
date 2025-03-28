import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://harshcohort01:cohort2003@cluster0.gcadi.mongodb.net/blogger-app?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB connected");
}

export default connectDB;