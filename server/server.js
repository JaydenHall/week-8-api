const express = require('express')

const animalRoutes = require('./routes/animals')

const server = express()
server.use(express.urlencoded({extended: true})) //need this for when sending info to the server

server.use('/api/animals', animalRoutes)

module.exports = server