const express = require("express")
const Activity = require("../models/activity")
const security = require("../middleware/security")
const router = express.Router()


router.get("/exercises", security.requireAuthenticatedUser, async(req, res, next) => {
    // return all exercise activities associated to the user
    try {
        const activities = Activity.listExercises(res.locals.user)
        return res.status(200).json({ activities });
    } catch (err) {
        return next(err);
    }
})

module.exports = router;