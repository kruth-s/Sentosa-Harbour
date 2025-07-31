import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // 👈 must come before importing cloudinary
import mongoose from 'mongoose';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import Cloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
// connectCloudinary();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


//initialising routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)




app.get('/', (req, res) => {
    res.send('API Working');
});


//Start the server
app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});
export default app;