const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")
const express = require("express")

const app = express();

// CORS => Cross Origin Resource Sharing
app.use(cors())

app.get('/', (req, res)=>
{
    res.send("This is the message from the backend")

})

module.exports = app;