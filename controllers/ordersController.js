const model = require('../models')

const Order = model.orders
const Menu = model.menus
const Transactions = model.transactions

exports.index = (req, res) => {
    Order.findAll({
        include:[{
            model: Menu,
            as:"menuId"
        },
        {
            model: Transactions,
            as:"transactions"
        }
    ]
    }).then(data => res.send(data))
}

exports.show = (req, res) => {
    Order.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}
exports.store = (req, res) => {
            Order.create(req.body).then(Order => {
                res.send({
                    messages: "success",
                    Order
                
            })
        })

    
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Order.update(req.body,{where : {id: req.params.id}}).then(Order => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Order.destroy(
        {where: {id: req.params.id}
    }).then(Order => {
        res.send({
            messages: 'Berhasil Dihapus',
            Order: Order.name
        })
    })
}
exports.orderByTransaction=(req, res)=>{
    Order.findAll(
        {where: {transactions_Id: req.params.id}
    }).then(data => 
        res.send(data)
        )
} 