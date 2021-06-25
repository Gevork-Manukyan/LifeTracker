const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")
const { UnauthorizedError } = require("../utils/errors")

// function to extract the jwt from the req header
const jwtFrom = ({ headers }) => {
    if (headers?.authorization) {
        const [scheme, token] = headers.authorization.split(" ")
        if (scheme.trim() === "Bearer") 
            return token;
    }

    return null;
}

// function to attach the user to res.locals
const extractUserFromJwt = (req, res, next) => {
    try {

        const token = jwtFrom(req)
        if (token) 
            res.locals.user = jwt.verify(token, SECRET_KEY)

        return next();
    } catch (err) {
        return next();
    }
}

// function to verify a authed user exist
const requireAuthenticatedUser = (req, res, next) => {
    try {

        const { user } = res.locals
        if (!user?.email)
            throw new UnauthorizedError()

        return next();

    } catch (err) {
        return next();
    }
}

module.exports = {
    extractUserFromJwt, 
    requireAuthenticatedUser
}