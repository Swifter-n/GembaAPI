const middleware = require('../middleware')
const controller = require('../controllers/gemba.controller')


module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept'
        )
        next()
    })

    app.post('/api/gemba', [middleware.verifyToken, middleware.uploadImage] ,controller.gemba)
    app.get('/api/manager-report-open/:id', controller.manager_JobOpen)
    app.get('/api/manager-report-progress', middleware.verifyToken, controller.manager_JobProgress)
    app.get('/api/manager-report-pending', middleware.verifyToken, controller.manager_JobPending)
    app.get('/api/manager-report-close', middleware.verifyToken, controller.manager_JobClose)
    app.get('/api/supervisor-report-open/:id', controller.supervisor_JobOpen)
    app.get('/api/supervisor-report-progress', middleware.verifyToken, controller.supervisor_JobProgress)
    app.get('/api/supervisor-report-pending', middleware.verifyToken, controller.supervisor_JobPending)
    app.get('/api/supervisor-report-close', middleware.verifyToken, controller.supervisor_JobClose)
    app.put('/api/gemba/status/:id', middleware.verifyToken, controller.updateStatus)
    app.put('/api/gemba/approval/:id', middleware.verifyToken, controller.updateApproval)
    app.put('/api/gemba/job/:id', [middleware.verifyToken, middleware.uploadImage], controller.updateGembaJob)
    app.put('/api/gemba/returntoedit/:id', [middleware.verifyToken], controller.returnToEdit)
    
    
}