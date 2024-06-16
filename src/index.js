// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// import express from "express";

// const app = express();
// console.log(app);

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`);
//         })
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error
//         })



//     } catch (error) {
//         console.error("ERROR", error)
//         // throw err
//     }
// })()


// const  connectDB = () => {
//     try {
//          mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`);
//         })
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error
//         })



//     } catch (error) {
//         console.error("ERROR", error)
//         // throw err
//     }
// }

// connectDB()



// const url = "ongodb+srv://dev:devsaini08@cluster0.dch1s6p.mongodb.net"
// const PORT = 8000;


// console.log(url);
// console.log(PORT);

// mongoose.connect(url)
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`server is runing and up`)
//             // console.log("connect to database");
//         })
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// import dotenv from "dotenv"
// dotenv.config({
//     path:'./env'
// })
// require('dotenv').config();
// const dotenv = require('dotenv');



import connectDB from "./db/index.js";
import app from "./app.js";
import dotenv from 'dotenv';
dotenv.config()


const PORT = process.env.PORT;

app.on("error", (error) => {
    console.log("ERROR", error);
    throw error
});

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is up and runing on PORT:${PORT}`);
        })
    })
    .catch((error) => {
        console.log(`DATA BASE CONECTION FAILED${error}`);
    })



