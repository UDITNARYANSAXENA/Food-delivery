import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1); // Exit process with failure
    }
};
