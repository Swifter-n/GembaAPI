const db = require('../model')
const Area2 = db.area2

exports.Area2 = (req, res) => {
    Area2.findAll({
        where : {
             area_id: req.body.area_id
        }
    }).then((result) => {
        res.status(200).json({
            message: 'success show area 2',
            data: result
        })
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}