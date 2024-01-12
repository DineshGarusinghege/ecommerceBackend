import express from 'express';
import dotenv from 'dotenv';
import morgon from'morgan';
import connectDB from './config/db.js';

// Rest Object
const app = express();

// config env
dotenv.config();

// middleware
app.use(express.json());
app.use(morgon('dev'));

// DB Configuration
connectDB();

// PORT
const PORT = process.env.PORT || 9000

// Rest API
app.get('/', (req, res)=>{
    res.send({
        message: 'Welcome to Ecommerce!',
    })
})

app.listen(PORT, ()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} Mode on PORT ${PORT}`.bgMagenta.white)
})