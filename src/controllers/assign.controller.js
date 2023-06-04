const db = require('../model')
const User = db.user

exports.assignTo = (req, res) => {
    User.findAll({
        where: {
            role_id: req.body.role_id,
        }
    }).then((result) =>{
        res.status(200).json({
            message: 'success show all assign to',
            data: result,
        })
    }).catch((err) => {
        message: err.message
    })
}