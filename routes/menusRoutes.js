const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json())

const menuController = require('../controllers/menusController')

app.group("/api/v1/", (router) => {
    router.get('/menus', menuController.index)
    router.get('/menus/:id', menuController.show)
    router.post('/menu',menuController.store)
    router.patch('/menu/:id', menuController.update)
    router.delete('/menu/:id', menuController.destroy)
    router.get('/menucategories/:id', menuController.categories)
})

module.exports = app