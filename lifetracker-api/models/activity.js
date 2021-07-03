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
            `, [user.email, newExercise.name, newExercise.duration, newExercise.intensity]
        )
        
        return result.rows[0];
    }

    // list all sleeps related to specific user
    static async listSleeps (user) {
        const results = await db.query(
            `
                SELECT sItems.id AS "sleepID", name, duration, intensity 
                FROM users
                    JOIN sleep_items AS sItems ON users.id = sItems.user_id
                WHERE user_id = (SELECT id FROM users WHERE email = $1)

            `, [user.email]
        )

        return results.rows;
    }

    // list all nutritional items related to specific user
    static async listNutritions (user) {
        const results = await db.query(
            `
                SELECT nItems.id AS "nutritionalID", name, duration, intensity 
                FROM users
                    JOIN nutritional_items AS nItems ON users.id = nItems.user_id
                WHERE user_id = (SELECT id FROM users WHERE email = $1)

            `, [user.email]
        )

        return results.rows;
    }
}

module.exports = Activity;