const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview , isReviewAuther,isLoggedIn} = require("../middleware.js");
const reviewControllers = require("../controllers/reviews.js");

// Review Post Route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewControllers.createReview));

// Review delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuther,
    wrapAsync(reviewControllers.deleteReview));

module.exports= router;
