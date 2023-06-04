const db = require('../model')
const Area1 = db.area1

exports.Area1 = (req, res) => {
    Area1.findAll({
        where: {
            loc_id: req.body.location
        }
    }).then((result) => {
        res.status(200).json({
            message: 'success show area 1',
            data: result
        })
    }).catch((err) =>{
        res.status(500).json({
            message: err.message
        })
    })
}