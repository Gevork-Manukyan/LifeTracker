const bcrypt = require("bcrypt")

const db = require("../db")

const { NotFoundError, UnauthorizedError, ForbiddenError } = require("../utils/errors")

class User {
    static async login (credentials) {
        // look user up by email and compare stored hash pw with inputed pw (authenticated user)
    }

    static async register (credentials) {
        // create new user with credentials and add to db
    }

    static async fetchUserByEmail (email) {
        // get user from db using email


        const result = await db.q
    }

}

module.exports = User;