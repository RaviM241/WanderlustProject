const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {seveRedirectUrl} = require("../middleware.js")
const userControllers =require("../controllers/user.js");


router.get("/signup",userControllers.renderSignupForm);

router.post("/signup", 
    wrapAsync(userControllers.Signup));

router.get("/login",userControllers.renderLoginForm);

router.post("/login", 
    seveRedirectUrl, 
    passport.authenticate('local', 
    { failureRedirect: '/login' , failureFlash:true,}),
    userControllers.Login);
router.get("/logout",userControllers.Logout);

module.exports = router;