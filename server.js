const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// importing our router object
const carRouter = require('./controllers/tracks')


// middleware
app.use(express.json());
app.use(logger('dev'));

// allowing our react app to make request to our 
// express server
app.use(cors({origin: 'http://localhost:5173'}))

// Routes go here (controllers)
app.use('/cars', carRouter)

app.listen(3000, () => {
  console.log('The express app is ready!');
});