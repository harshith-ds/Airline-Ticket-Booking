import express from "express";
import connectDb from "./config/db.config.js";
import config from "./config/env.config.js";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware.js";
import morgan from 'morgan'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from "helmet";
import cookieParser from 'cookie-parser'
import routes from "./routes/routes.js";
import authenticate from "./middlewares/authenticate.js";
import corsOptions from "./config/cors.options.js";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
// import {MongoClient} from ''

import dotenv from 'dotenv';
dotenv.config();
// const uri =
//   'mongodb+srv://pokemonfanshravan:pokemon@cluster0.4brsf15.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });



const app = express();
app.use(cors({ origin: ["localhost", "*", "http://localhost:3000"]}))

const router = express.Router()

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({ xssFilter: true }));
app.use(mongoSanitize());
app.use(authenticate());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
routes(app, router);

//errorHandling middleware 
app.use(errorHandlingMiddleware)


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const Book = require("../src/models/booking.js");
import Book from "../src/models/booking.js";

app.post("/api/bookings", async function(req, res){
    // const db = await connectDb();
    // const collection = db.collection()
    const data = req.body;
    console.log(data);

    const datas = new Book(data);
    await datas.save()
    .then(() => {
        console.log("Succussfully added");
        res.json("Successfully added");
    })
    .catch((e) => console.log(e))
});

app.get("/api/getbookings", async function(req, res){
    try{
        const getData = await Book.find();
        console.log(getData);
        res.json(getData);
    }
    catch(e){
        console.error("Error");
        res.status(500).json({e:'Internal error'})
    }
})

// Start server
const start = async () => {
    await connectDb();
    app.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}...✅ `);
    });
};
start();
