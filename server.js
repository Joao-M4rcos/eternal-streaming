const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const movies = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("home", { cards: movies })
})

server.listen(5000, () => {
    console.log("server is running")
})