const { Client } = require("pg")
const { getDataBaseUri } = require("./config")
require("colors")

const db = new Client({ connectionString: getDataBaseUri() })

db.connect((err) => {
    if (err) 
        console.log("connection error", err.stack)
    else 
        console.log("Succesfully connected to postgres database!".blue)
})

module.exports = db;