const db = require('../model')
const User = db.user
const bcryct = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/auth')

exports.register = (req, res) => {
    User.create({
        name: req.body.name,
        phone: req.body.phone.replace(/^0+/, '62'),
        email: req.body.email,
        password: bcryct.hashSync(req.body.password, 8),
        role_id: req.body.role_id,
        plant_id: req.body.plant_id
    }).then((user) => {
        res.status(201).json({
            message: 'User was registed successfuly!',
            ...user.dataValues,
        })
    }).catch((err) =>{
        res.status(500).json({
            message: err.message
        })
    })
}

exports.login = (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        //console.log(user)
        if(!user){
            return res.status(404).json({
                message: 'user not found'
            })
        }
        let passwordIsValid = bcryct.compareSync(req.body.password, user.password)
        
        if(!passwordIsValid){
            return res.status(401).json({
                accessToken: null,
                message: 'invalid password',
            })
        }

        let token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400, //24 hours satuan detik
        })

        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role_id: user.role_id,
            plant_id: user.plant_id,
            accessToken: token
        })

    }).catch((err) =>{
        res.status(500).json({
            message: err.message,
        })
    })
}
