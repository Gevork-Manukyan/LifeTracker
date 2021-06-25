const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { NotFoundError } = require("./utils/errors")
const security = require("./middleware/security")

const authRoutes = require("./routes/auth")

const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)


/** Handle 404 errors -- this matches everything that isn't defined */
app.use((req, res, next) => {
    return next(new NotFoundError())
})

/** Generic error handler; anything unhandled ends up here. */
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: { message, status }
    })
})

PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})