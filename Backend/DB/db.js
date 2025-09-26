const mongoose = require('mongoose');

async function connectDB() {
    const dbURL = process.env.MONGO_URL || 'mongodb://localhost:27017/ridemate';

    try {
        await mongoose.connect(dbURL, {
        });
        console.log('Connected to MongoDB.');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); 
    }
}

module.exports = connectDB;
