const express = require("express")
const Activity = require("../models/activity")
const security = require("../middleware/security")
const router = express.Router()


router.get("/exercise", security.requireAuthenticatedUser, async(req, res, next) => {
    // return all exercise activities associated to the user
    try {
        const { user } = res.locals
        const activities = await Activity.listExercises({ user })
        return res.status(200).json({ activities });
    } catch (err) {
        console.log("HERE")
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
        const { user } = res.locals
        const activities = await Activity.listNutritions({ user })
        return res.status(200).json({ activities })
    } catch (err) {
        return next(err);
    }
})

router.post("/nutrition", security.requireAuthenticatedUser, async(req, res, next) => {
    // creates new nutrition activity
    try {
        const { user } = res.locals
        const { newNutrition } = req.body
        const nutrition = await Activity.createNutrition({ user, newNutrition })
        return res.status(201).json({ nutrition })
    } catch (err) {
        return next(err);
    }
})

router.get("/sleep", security.requireAuthenticatedUser, async(req, res, next) => {
    // return all sleep activities associated to user
    try {
        const { user } = res.locals
        const activities = await Activity.listSleeps({ user })
        return res.status(200).json({ activities })
    } catch (err) {
        return next(err);
    }
})

router.post("/sleep", security.requireAuthenticatedUser, async(re, res, next) => {
    // creates new sleep activity
    try {
        const { user } = res.locals
        const { newSleep } = req.body
        const sleep = await Activity.createSleep({ user, newSleep })
        return res.status(201).json({ sleep })
    } catch (err) {
        return next(err);
    }
})


module.exports = router;