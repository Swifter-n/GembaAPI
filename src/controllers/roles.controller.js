const db = require('../model')
const Roles = db.roles
const { Op } = require("sequelize");


exports.roles = (req, res) =>{
    Roles.findAll({
        where: {
            id: {
                [Op.notIn]: [1]
              }
        },
    }).then((result) =>{
        res.status(200).json({
            message: 'success show roles',
            data: result
        })
    }).catch((err) =>{
        res.status(500).json({
            message: err.message
        })
    })
}