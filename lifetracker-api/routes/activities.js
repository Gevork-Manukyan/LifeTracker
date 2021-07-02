const express = require("express")
const Activity = require("../models/activity")
const security = require("../middleware/security")
const router = express.Router()


router.get("/exercise", security.requireAuthenticatedUser, async(req, res, next) => {
    // return all exercise activities associated to the user
    try {
        const activities = Activity.listExercises(res.locals.user)
        return res.status(200).json({ activities });
    } catch (err) {
        return next(err);
    }
})

router.post("/exercise", security.requireAuthenticatedUser, async(req, res, next) => {
    // creates new exercise activity 
    try {
        const { user } = res.locals
        const { newExercise } = req.body
        const exercise = await Activity.createExercise({ user, newExercise })
        return res.status(201).json({ exercise })
    } catch (err) {
        return next(err);
    }
})

router.get("/nutrition", security.requireAuthenticatedUser, async(req, res, next) => {
    // return all nutrition items associated to user
    try {
        const nutritions = Activity.listNutritions(res.locals.user)
        return res.status(200).json({ nutritions })
    } catch (err) {
        return next(err);
    }
})

router.post("/nutrition", security.requireAuthenticatedUser, async(req, res, next) => {
    // creates new nutrition activity
    try {
        
    } catch (err) {
        return next(err);
    }
})

router.get("/sleep", security.requireAuthenticatedUser, async(req, res, next) => {
    // return all sleep activities associated to user
    try {
        const sleeps = Activity.listSleeps(res.locals.user)
        return res.status(200).json({ sleeps })
    } catch (err) {
        return next(err);
    }
})

router.post("/sleep", security.requireAuthenticatedUser, async(re, res, next) => {
    // creates new sleep activity
    try {
        
    } catch (err) {
        return next(err);
    }
})


module.exports = router;