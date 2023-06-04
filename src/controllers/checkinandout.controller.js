const db = require('../model')
const check = db.checkInandOut
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const dateOfToday = new Date();
const moment = require('moment')


exports.checkIn = (req, res) => {
    console.log(moment().format('yyyy-MM-DD'));
    if(!req.body.checkIn){
        res.status(401).json({
            message: 'Check In is required',
        })
        return
    }
    if(!req.body.longtitude){
        res.status(401).json({
            message: 'Longtitude is required'
        })
    return
    }
    if(!req.body.latitude){
        res.status(401).json({
            message: 'Latitude is required'
        })
        return
    }


    const checkIns = {
        userID: req.userID,
        checkIn: req.body.checkIn,
        longtitude: req.body.longtitude,
        latitude: req.body.latitude,
        check_date: moment().format('yyyy-MM-DD')
    }

    check.create(checkIns).then((results) => {
        res.status(200).json({
            data: results,
            message: 'success'
        })
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}

exports.viewCheckIn = (req, res) => {
const startedDate = new Date();
//console.log(startedDate)
const endDate = new Date();
  check.sequelize.query(
    `SELECT id,CASE WHEN "checkIn" IS NULL THEN '' ELSE "checkIn" END AS check FROM checkinandouts WHERE CAST("check_date" as date) = :check_date AND "userID" = :userID ORDER BY "createdAt" DESC LIMIT 1`,
    {
      replacements: { check_date: startedDate, userID: req.userID },
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
}

exports.CheckOut = (req, res) => {
    const id = req.params.id;

    check.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.status(200).json({
            message: 'success',
            data: num,
          })
        } else {
          res.send({
            message: `Cannot update job with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating job with id=" + id
        });
      });
}

exports.viewCheckOut = (req, res) => {
  const startedDate = new Date();
  //console.log(startedDate)
  const endDate = new Date();
    check.sequelize.query(
      `SELECT id,CASE WHEN "checkOut" IS NULL THEN '' ELSE "checkOut" END AS check FROM checkinandouts WHERE CAST("check_date" as date) = :check_date AND "userID" = :userID ORDER BY "createdAt" DESC LIMIT 1`,
      {
        replacements: { check_date: startedDate, userID: req.userID },
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
  }