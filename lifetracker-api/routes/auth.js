const express = require("express")
const User = require("../models/user")
const router = express.Router()


router.post("/login", async(req, res, next) => {
    // call login function 
    // create token and assign to local storage
    // return user
})

router.post("/register", async(req, res, next) => {
    // call register function
    // create token and assign to local storage
    // return user
})

router.get("/me", async(req, res, next) => {
    // check if user is authenticated
    // return user based on email
})


module.exports = router;