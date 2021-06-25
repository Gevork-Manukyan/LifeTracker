const db = require("../db")
const { NotFoundError, BadRequestError } = require("../utils/errors")

class Activity {
    // list all activities related to specific user
    static async listExercises (user) {
        const results = await db.query(
            `
                SELECT eItems.id AS "exerciseID", name, duration, intensity 
                FROM users
                    JOIN exercise_items AS eItems ON users.id = eItems.user_id
                WHERE user_id = (SELECT id FROM users WHERE email = $1)

            `, [user.email]
        )

        return results.rows;
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