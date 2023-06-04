const db = require('../model')
const fs = require("fs");
const { QueryTypes } = require('sequelize');
var nodemailer = require('nodemailer');
//const {uploadFile, __basedir} = require('./../middleware/multer')
const gembaDB = db.gemba

exports.gemba = async (req, res) => {
   
    try{
        //await uploadFile(req, res)
        console.log(req.file.filename)
        if(req.file === undefined){
            return res.status(400).json({
                message: 'Please upload picture!'
            })
        }

        const gembas = {
            jobID: 'Job_SGB_'+ Math.floor(Math.random() * 100) + req.userID,
            userID: req.userID,
            photoBefore: JSON.stringify(req.file.filename),
            address: req.body.address,
            location: req.body.location,
            area1: req.body.area1,
            area2: req.body.area2,
            gemba_type: req.body.gemba_type,
            categories: req.body.categories,
            description: req.body.description,
            owner_name: req.body.owner_name,
            assignTo: req.body.assignTo,
            dateJob: Date.now(),
            statusJob: 'Open'
        }

        gembaDB.create(gembas).then((results) => {
            res.status(200).json({
                data: results,
                message: 'success',
            })
        }).catch((err) => {
            res.status(500).json({
                message: err.message
            })
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}

exports.manager_JobOpen = (req, res) => {
    var id = req.params.id;
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."userID" = b.id
        WHERE "statusJob" = :statusJob AND "userID" = :userID ORDER BY "dateJob" DESC`,
        {
          replacements: { statusJob: 'Open', userID: id },
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

exports.manager_JobProgress = (req, res) => {
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."userID" = b.id
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
}

exports.manager_JobPending = (req, res) => {
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."userID" = b.id
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
}

exports.manager_JobClose = (req, res) => {
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."userID" = b.id
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
}

exports.supervisor_JobOpen = (req, res) => {
    var id = req.params.id;
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."assignTo" = b.id
        WHERE "statusJob" = :statusJob AND "assignTo" = :assignTo ORDER BY "dateJob" DESC`,
        {
          replacements: { statusJob: 'Open', assignTo: id },
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

exports.supervisor_JobProgress = (req, res) => {
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."assignTo" = b.id
        WHERE "statusJob" = :statusJob AND "assignTo" = :assignTo ORDER BY "dateJob" DESC`,
        {
          replacements: { statusJob: 'Progress', assignTo: req.userID },
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

exports.supervisor_JobPending = (req, res) => {
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."assignTo" = b.id
        WHERE "statusJob" = :statusJob AND "assignTo" = :assignTo ORDER BY "dateJob" DESC`,
        {
          replacements: { statusJob: 'Pending', assignTo: req.userID },
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

exports.supervisor_JobClose = (req, res) => {
    gembaDB.sequelize.query(
        `SELECT a.id, a."jobID",
        coalesce(a."categories", '') AS categories,
        coalesce(a."description", '') AS description,
        CAST(a."dateJob" as date) as "dateJob",
        a."statusJob",
		b.phone FROM gemba_submissions a
        LEFT JOIN users b
        ON a."assignTo" = b.id
        WHERE "statusJob" = :statusJob AND "assignTo" = :assignTo ORDER BY "dateJob" DESC`,
        {
          replacements: { statusJob: 'Close', assignTo: req.userID },
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

exports.updateStatus = (req, res) => {
    const id = req.params.id;

    gembaDB.update(req.body, {
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

exports.updateApproval = (req, res) => {
    const id = req.params.id;

    const gemba_approval = {
        commentJob: req.body.commentJob,
        score: req.body.score,
        statusJob: 'Close'
    }

    gembaDB.update(gemba_approval, {
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

exports.updateGembaJob = (req, res) => {
    const id = req.params.id;

    const gemba_job = {
        dueDate: req.body.due_date,
        photoAfter: JSON.stringify(req.file.filename)
    }

    gembaDB.update(gemba_job, {
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

exports.returnToEdit = async(req, res) => {
    const id = req.params.id;

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: 'donotreply@suntorygaruda.com',
            pass: 'pww6fsyq',
            secureConnection: false,
            tls: { ciphers: 'SSLv3'}
        }
    });
    
    // send email
    var mailOptions = {
        from: 'donotreply@suntorygaruda.com',
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.html
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(500).send({
                message: error.message
              });
        } else {
          //console.log('Email sent: ' + info.response);
          const gemba_rte = {
            statusJob: 'Open',
        }
    
        gembaDB.update(gemba_rte, {
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
      });



    
}