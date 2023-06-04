const db =  require('../model')
const { QueryTypes } = require('sequelize');
const User = db.user
const Gemba = db.gemba

exports.open = (req, res) =>{
    User.findByPk(req.body.id).then((user) =>{
        if(user){
            Gemba.sequelize.query(
                `SELECT a.id, a."jobID",a.address,
                a.location,
                a.area1,
                a.area2,
                a.gemba_type,
                a.categories,
                a.description,
                a.owner_name,
                a."assignTo",
                a."photoBefore",
                coalesce(a."photoAfter", '') as "photoAfter",
                CAST(a."dateJob" as date) as "dateJob",
                coalesce(CAST(a."dueDate" as VARCHAR),'') as "dueDate",
                coalesce(a."commentJob", '') as "commentJob",
                a."statusJob",
                coalesce(a.score, 0) as score,
                coalesce(a.remark, '') as remark
                ,b.name,b.phone FROM gemba_submissions a
                LEFT JOIN users b
                ON a."assignTo" = b.id
                WHERE "statusJob" = :statusJob AND "userID" = :userID ORDER BY "dateJob" DESC`,
                {
                  replacements: { statusJob: 'Open', userID: req.body.id },
                  type: QueryTypes.SELECT
                }
              ).then((results) => {
                res.status(200).json({
                    data: results,
                    message: 'success'
                })
            }).catch((err) => {
                res.status(500).json({
                    message: err.message
                })
            })
        }else{
            res.status(404).json({
                message: 'User No Found!'
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}

exports.close = (req, res) =>{
    User.findByPk(req.userID).then((user) =>{
        if(user){
            Gemba.sequelize.query(
                `SELECT a.*,b.name,b.phone FROM gemba_submissions a
                LEFT JOIN users b
                ON a."assignTo" = b.id
                WHERE "statusJob" = :statusJob AND "userID" = :userID ORDER BY "dateJob" DESC`,
                {
                  replacements: { statusJob: 'Close', userID: req.userID },
                  type: QueryTypes.SELECT
                }
              ).then((results) => {
                res.status(200).json({
                    data: results,
                    message: 'success'
                })
            }).catch((err) => {
                res.status(500).json({
                    message: err.message
                })
            })
        }else{
            res.status(404).json({
                message: 'User No Found!'
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}

exports.pending = (req, res) =>{
    User.findByPk(req.userID).then((user) =>{
        if(user){
            Gemba.sequelize.query(
                `SELECT a.*,b.name,b.phone FROM gemba_submissions a
                LEFT JOIN users b
                ON a."assignTo" = b.id
                WHERE "statusJob" = :statusJob AND "userID" = :userID ORDER BY "dateJob" DESC`,
                {
                  replacements: { statusJob: 'Pending', userID: req.userID },
                  type: QueryTypes.SELECT
                }
              ).then((results) => {
                res.status(200).json({
                    data: results,
                    message: 'success'
                })
            }).catch((err) => {
                res.status(500).json({
                    message: err.message
                })
            })
        }else{
            res.status(404).json({
                message: 'User No Found!'
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}

exports.progress = (req, res) =>{
    User.findByPk(req.userID).then((user) =>{
        if(user){
            Gemba.sequelize.query(
                `SELECT a.*,b.name,b.phone FROM gemba_submissions a
                LEFT JOIN users b
                ON a."assignTo" = b.id
                WHERE "statusJob" = :statusJob AND "userID" = :userID ORDER BY "dateJob" DESC`,
                {
                  replacements: { statusJob: 'Progress', userID: req.userID },
                  type: QueryTypes.SELECT
                }
              ).then((results) => {
                res.status(200).json({
                    data: results,
                    message: 'success'
                })
            }).catch((err) => {
                res.status(500).json({
                    message: err.message
                })
            })
        }else{
            res.status(404).json({
                message: 'User No Found!'
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}