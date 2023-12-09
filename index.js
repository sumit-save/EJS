const mongoose = require("mongoose");
const express = require("express");
require("dotenv/config");
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);

// Create Database Connection With MongoDB
(async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("MongoDB Database Connected Successfully");
    } catch (error) {
        console.log("Unable To Connect MongoDB Database");
        console.log(error);
    }
})();

// Create Server On Localhost:8000
(async() => {
    try {
        await app.listen(PORT);
        console.log(`Server Started On Localhost:${PORT}`);
    } catch (error) {
        console.log(`Unable To Create Server On Localhost:${PORT}`);
        console.log(error);
    }
})();