const express = require("express")

const User = require("../models/user")
const security = require("../middleware/security")
const { createUserJwt } = require("../utils/token")
const router = express.Router()


router.post("/login", async(req, res, next) => {

    try {
        const user = await User.login(req.body)
        const token = createUserJwt(user)
        return res.status(200).json({ user, token })
    } catch (err) {
        return next(err);
    }
})

router.post("/register", async(req, res, next) => {

    try {
        const user = await User.register({ ...req.body, isAdmin: false })
        const token = createUserJwt(user)
        return res.status(200).json({ user, token });
    } catch (err) {
        return next(err);
    }
})

router.get("/me", security.requireAuthenticatedUser, async(req, res, next) => {

    try {
        const { user } = res.locals
        const newUser = await User.fetchUserByEmail(user.email)
        const newPublicUser = await User.makePublicUser(newUser)
        return res.status(200).json({ newPublicUser });

    } catch (err) {
        return next(err);
    }
})


module.exports = router;