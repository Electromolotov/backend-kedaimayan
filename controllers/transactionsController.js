const model = require('../models')
const Transactions = model.transactions

exports.index = (req, res) => {
    Transactions.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Transactions.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {

    Transactions.create(req.body).then(Transactions => {
        res.send({
            messages: "success",
            Transactions
        })
    }).catch(err => {
        res.send({
            status : 'error',
            msg : err
        })
    })
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Transactions.update(req.body,{where : {id: req.params.id}}).then(Transactions => {
        res.send({
            Pesan: 'Sukses',
            Transactions
        })
    })
}

exports.destroy = (req, res) => {
    Transactions.destroy(
        {where: {id: req.params.id}
    }).then(Transactions => {
        res.send({
            messages: 'Berhasil Dihapus'
        })
    })
}

