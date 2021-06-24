
class ExpressError extends Error {
    constructor(message, error) {
        super();
        this.message = message; 
        this.error = error;
    }
}

/** 400 BAD REQUEST error */

class BadRequestError extends ExpressError{
    constructor(message = "Bad Request") {
        super(message, 400)
    }
}

/** 401 UNAUTHORIZED error */

class UnauthorizedError extends ExpressError {
    constructor(message = "Unauthorized Request") {
        super(message, 401)
    }
}

/** 403 FORBIDDEN error */

class ForbiddenError extends ExpressError {
    constructor(message = "Forbidden Request") {
        super(message, 403)
    }
}

/** 404 NOT FOUND error */

class NotFoundError extends ExpressError{
    constructor(message = "Not Found") {
        super(message, 404)
    }
}

module.exports = {
    ExpressError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError
}