const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/db');
const app = express();
const userRoutes = require('./Routes/user.routes');
const captainRoutes = require('./Routes/captain.routes');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser())
connectDB();

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;