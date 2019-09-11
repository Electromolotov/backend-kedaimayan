const model = require('../models')
const Categories = model.categories

exports.index = (req, res) => {
    Categories.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Categories.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {

    Categories.create(req.body).then(categories => {
        res.send({
            messages: "success",
            categories
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
    Categories.update(req.body,{where : {id: req.params.id}}).then(categories => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Categories.destroy(
        {where: {id: req.params.id}
    }).then(Categories => {
        res.send({
            messages: 'Berhasil Dihapus'
        })
    })
}

