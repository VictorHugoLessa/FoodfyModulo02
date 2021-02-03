const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function(){
    console.log("Server is Running")
})

server.get("/", function(req, res) {
    return res.render("index", { recipes })
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", { recipes })
})

server.get("/recipe/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipeArray = recipes[recipeIndex]; // Array de receitas carregadas do data.js
  
    return res.render("recipe", { recipeArray })
  })