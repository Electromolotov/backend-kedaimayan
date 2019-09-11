const model = require('../models')
const Menus = model.menus

exports.index = (req, res) => {
    Menus.findAll().then(data => res.send(data))
}
exports.categories=(req, res)=>{
    Menus.findAll(
        {where: {categories_id: req.params.id}
    }).then(data => 
        res.send(data)
        )
} 
exports.show = (req, res) => {
    Menus.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {

    Menus.create(req.body).then(Menus => {
        res.send({
            messages: "success",
            Menus
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
    Menus.update(req.body,{where : {id: req.params.id}}).then(Menus => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Menus.destroy(
        {where: {id: req.params.id}
    }).then(Menus => {
        res.send({
            messages: 'Berhasil Dihapus'
        })
    })
}

