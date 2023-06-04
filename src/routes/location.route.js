const middleware = require('../middleware')
const controller = require('../controllers/location.controller')
const controllerArea = require('../controllers/area1.controller')
const controllerArea2 = require('../controllers/area2.controller')
const controllerRoles = require('../controllers/roles.controller')
const controllerAssign = require('../controllers/assign.controller')

module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept'
        )
        next()
    })

    app.get('/api/location', middleware.verifyToken ,controller.location)
    app.post('/api/area1', middleware.verifyToken ,controllerArea.Area1)
    app.post('/api/area2', middleware.verifyToken ,controllerArea2.Area2)
    app.get('/api/roles', middleware.verifyToken , controllerRoles.roles)
    app.post('/api/assign', middleware.verifyToken ,controllerAssign.assignTo)
}