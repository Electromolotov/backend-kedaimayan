const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())


// const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/ordersRoutes')
const categoriesRoutes= require('./routes/categoriesRoutes')
const menusRoutes= require('./routes/menusRoutes')
const transactionsRoute = require('./routes/transactionsRoutes')

app.get('/', (req, res) => {
    res.send('Server telah jalan cuuuk !!!')
})


app.use(menusRoutes)

app.use(categoriesRoutes)
app.use(orderRoutes)
app.use(transactionsRoute)

app.listen(port, () => console.log(`server running on port ${port}!!`))