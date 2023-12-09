const express = require("express");
const usersModel = require("../models/usersModel");

const router = new express.Router();

// Homepage Page
router.get("/homepage", async (req, res) => {
    return res.render("pages/homepage");
});

// Register Page
router.get("/register", async (req, res) => {
    return res.render("pages/register");
});

// Register Page
router.post("/register", async (req, res) => {
    const user = await usersModel.findOne({ email: req.body.email });
    if (user) {
        return res.render("pages/register", { message: "username already exists" });
    }
    const newuser = new usersModel({
        email: req.body.email,
        password: req.body.password
    });
    const saveduser = await newuser.save();
    return res.render("pages/login", { message: "user registered successfully" });
});

// Login Page
router.get("/login", async (req, res) => {
    return res.render("pages/login");
});

// Login Page
router.post("/login", async (req, res) => {
    const user = await usersModel.findOne({ email: req.body.email, password: req.body.password });
    if (user) {
        return res.render("pages/image", { sessionId: user._id });
    } else {
        return res.render("pages/login", { message: "email or password not found" });
    }
});

// Image Page
router.get("/image", async (req, res) => {
    return res.render("pages/image");
});

module.exports = router;