const bcrypt = require("bcrypt")

const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config")

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
            isAdmin: user.is_admin,
            createdAt: user.created_at
        }
    }


    static async register (credentials) {

        const requiredFields = ["username", "email", "password", "isAdmin"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field))
                throw new BadRequestError(`Missing ${field}`)
        })
        

        if (credentials.email.indexOf('@') <= 0)
            throw new BadRequestError('Invalid email')

        if (await this.fetchUserByEmail(credentials.email))
            throw new BadRequestError(`Existing User with email ${credentials.email}`)

        const hashedPass = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR) 
        const normalizedEmail = credentials.email.toLowerCase()

        const result = await db.query(
            `
                INSERT INTO users (username, email, password, is_admin)
                VALUES ($1, $2, $3, $4)
                RETURNING id, 
                          username,
                          email,
                          is_admin AS isAdmin
            `, [credentials.username, normalizedEmail, hashedPass, credentials.isAdmin]
        )

        return this.makePublicUser(result.rows[0]);
    }


    static async fetchUserByEmail (email) {

        if (!email)
            throw new NotFoundError("No email provided")

        const result = await db.query(` SELECT * FROM users WHERE email = $1 `, [email.toLowerCase()])

        return result.rows[0];
    }

}

module.exports = User;