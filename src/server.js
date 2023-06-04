const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()

let whitelist = ['http://locahost:8080']
let corsOptions = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const db = require('./model')
const seed = require('./model/seeds')
db.sequelize
//.sync({force: true})
.authenticate()
.then(() => {
    // seed.plantSeed()
    // seed.roleSeed()
    // seed.userSeed()
    // seed.locationSeed()
    // seed.area1Seed()
    // seed.area2Seed()
    console.log('Database Connected')
})
.catch((err) =>{
    console.error(`Database Connection Failed.`, err.message)
})



app.get('/', (req, res) =>{
    res.json({
        message: "Server is running"
      });
})

require('./routes/auth.route')(app)
require('./routes/profile.route')(app)
require('./routes/location.route')(app)
require('./routes/checkAll.route')(app)
require('./routes/gemba.route')(app)
require('./routes/report.route')(app)

const PORT = process.env.APP_PORT || 8810
app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})
