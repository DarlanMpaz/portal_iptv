const express = require ('express')
const planController = require('./controllers/planController')
const connection = require ('./database/connection')

const routes = express.Router()

routes.get('/plans', planController.index)

routes.post('/plans', planController.create)

routes.delete('/plans/:id', planController.remove)

module.exports = routes