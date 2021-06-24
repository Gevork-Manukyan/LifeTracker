const express = require("express")
const cors = require("cors")
const morgan = require("morgan")


const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))



app.use("/", async (req, res, next) => {
    res.status(200).json({ ping: "pong" })
})

PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})