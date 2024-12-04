const dotenv = require("dotenv")
dotenv.config()

const http = require("http")

const app = require("./app")

const server = http.createServer(app)

const port = process.env.PORT || 3000
server.listen(port, ()=>{
    console.log(`The server is running in the port ${port}`)
})