const db = require("../db")
const { NotFoundError, BadRequestError } = require("../utils/errors")

class Activity {
    // list all activities related to specific user
    static async listExercises ({ user }) {

        const results = await db.query(
            `
                SELECT id AS "exerciseID", user_id AS "userId", name, duration, intensity 
                FROM exercise_items
                WHERE user_id = (SELECT id FROM users WHERE email = $1)

            `, [user.email]
        )
        
        return results.rows;
    }

    // create new exercise 
    static async createExercise ({ user, newExercise }) {
        
        const requiredFields = ["name", "duration", "intensity"]
        requiredFields.forEach((field) => {
            if (!newExercise?.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing required field - ${field} - in request body.`)
            }
        })

        const normalizedEmail = user.email.toLowerCase()
        
        const result = await db.query (
            `
                INSERT INTO exercise_items (user_id, name, duration, intensity)
                VALUES ((SELECT id FROM users WHERE email = $1),
                        $2,
                        $3,
                        $4)
                RETURNING id AS "exerciseID",
                          user_id AS "userId",
                          name,
                          duration,
                          intensity;
            `, [normalizedEmail, newExercise.name, newExercise.duration, newExercise.intensity]
        )
        
        return result.rows[0];
    }
    
    // list all nutritional items related to specific user
    static async listNutritions (user) {
        const results = await db.query(
            `
                SELECT id AS "nutritionID", user_id AS "userId", name AS "foodName", calories, quantity
                FROM nutritional_items
                WHERE user_id = (SELECT id FROM users WHERE email = $1)

            `, [user.email]
        )

        console.log(results)
        return results.rows;
    }

    // create new nutrition
    static async createNutrition ({ user, newNutrition }) {

        const requiredFields = ["name", "calories", "quantity"]
        requiredFields.forEach((field) => {
            if (!newNutrition?.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing required field - ${field} - in request body.`)
            }
        })

        const normalizedEmail = user.email.toLowerCase()

        const result = await db.query (
            `
                INSERT INTO nutritional_items (user_id, name, calories, quantity)
                VALUES ((SELECT id FROM users WHERE email = $1),
                        $2,
                        $3,
                        $4)
                RETURNING id AS "nutritionID",
                          user_id AS "userId",
                          name,
                          calories,
                          quantity;
            `, [normalizedEmail, newNutrition.name, newNutrition.calories, newNutrition.quantity]
        )

        return result.rows[0];
    }
    
    // list all sleeps related to specific user
    static async listSleeps (user) {
        const results = await db.query(
            `
                SELECT id AS "sleepID", user_id AS "userId", start_date, end_date, start_time, end_time, hours
                FROM sleep_items
                WHERE user_id = (SELECT id FROM users WHERE email = $1)

            `, [user.email]
        )

        return results.rows;
    }

    // create new sleep
    static async createSleep ({ user, newSleep }) {

    }
}

module.exports = Activity;