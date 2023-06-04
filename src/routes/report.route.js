const middleware = require('../middleware')
const controller = require('../controllers/report.controller')

module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept'
        )
        next()
    })

    app.post('/api/report-open', controller.open)
    app.get('/api/report-close', middleware.verifyToken ,controller.close)
    app.get('/api/report-pending', middleware.verifyToken ,controller.pending)
    app.get('/api/report-progress', middleware.verifyToken ,controller.progress)
}