const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json())

const transactionsController = require('../controllers/transactionsController')

app.group("/api/v1/", (router) => {
    router.get('/transactions', transactionsController.index)
    router.get('/transactions/:id', transactionsController.show)
    router.post('/transaction',transactionsController.store)
    router.patch('/transaction/:id', transactionsController.update)
    router.delete('/transaction/:id', transactionsController.destroy)
})

module.exports = app