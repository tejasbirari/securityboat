const mongoose = require('mongoose');
require('dotenv').config();

const connection = () => {
    return mongoose.connect(process.env.MONGO_DB_URL);
};

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB!");
});
  
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
  
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB!");
});

module.exports = connection;