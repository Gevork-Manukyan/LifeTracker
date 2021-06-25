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
}

module.exports = Activity;