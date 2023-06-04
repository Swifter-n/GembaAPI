const db = require('../model')
const Location = db.location

exports.location = (req, res) =>{
    Location.findAll().then((result) =>{
        res.status(200).json({
            message: 'success show location',
            data: result
        })
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}