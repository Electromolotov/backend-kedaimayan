const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json())

const orderController = require('../controllers/ordersController')

app.group("/api/v1/", (router) => {
    router.get('/orders', orderController.index)
    router.get('/orders/:id', orderController.show)
    router.post('/order',orderController.store)
    router.patch('/order/:id', orderController.update)
    router.delete('/order/:id', orderController.destroy)
    router.get('/orderByTransaction/:id', orderController.orderByTransaction)
})

module.exports = app