import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error(error)
    }
}

export default connectMongoDB