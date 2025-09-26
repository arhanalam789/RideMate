const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/db');
const app = express();
const userRoutes = require('./Routes/user.routes');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
connectDB();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;