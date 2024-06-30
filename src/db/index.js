import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv';
dotenv.config()



// const PORT = process.env.PORT;


// const URL = "mongodb+srv://dev:devsaini08@cluster0.dch1s6p.mongodb.net";
// console.log(URi);
const URL = process.env.MONGODB_URI;

// console.log(URL);


const connectDB = async () => {
    try {
        const coonectioninstance = await mongoose.connect(`${URL}/${DB_NAME}`)
        console.log(`connect sucess  ${coonectioninstance.connection.host}`);
    } catch (error) {
        console.log("mongo connecting err", error);
        process.exit(1)
    }
}


export default connectDB