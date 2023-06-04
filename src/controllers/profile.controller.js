const db =  require('../model')
const User = db.user

exports.profile = (req, res) =>{
    User.findByPk(req.userID).then((user) =>{
        res.status(200).json({
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            role_id: user.role_id,
            plant_id: user.plant_id,
        })
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}