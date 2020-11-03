const express = require("express")
const nunjucks = require("nunjucks")
const data = require('./data')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("home")
})

server.get("/api/data", (req, res) => {
    res.send(data)
})

server.listen(process.env.PORT || 5000, () => {
    console.log("server is running")
})