const middleware = require('../middleware')
const controller = require('../controllers/checkinandout.controller')

module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept'
        )
        next()
    })

    app.post('/api/checkIn', middleware.verifyToken ,controller.checkIn)
    app.get('/api/view-checkIn', middleware.verifyToken ,controller.viewCheckIn)
    app.put('/api/checkOut/:id', middleware.verifyToken ,controller.CheckOut)
    app.get('/api/view-checkOut', middleware.verifyToken ,controller.viewCheckOut)
}