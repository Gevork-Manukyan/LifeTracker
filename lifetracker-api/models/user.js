const bcrypt = require("bcrypt")

const db = require("../db")

const { NotFoundError, UnauthorizedError, BadRequestError } = require("../utils/errors")

class User {
    static async login (credentials) {
        
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field))
                throw new BadRequestError(`Missing ${field}`)
        })

        const user = await this.fetchUserByEmail(credentials.email)

        // If user exists, and pass correct, return user
        if (user) {
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid)
                return this.makePublicUser(user);
        }

        // else throw error
        throw new UnauthorizedError("Invalid email/password")
    }

    /** Removes Password from user */
    static async makePublicUser (user) {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            isAdmin: user.is_admin,
            createdAt: user.created_at
        }
    }

    static async register (credentials) {
        // create new user with credentials and add to db
    }

    static async fetchUserByEmail (email) {

        if (!email)
            throw new NotFoundError("No email provided")

        const result = await db.query(` SELECT * FROM users WHERE email = $1 `, [email.toLowerCase()])

        return result.rows[0];
    }

}

module.exports = User;