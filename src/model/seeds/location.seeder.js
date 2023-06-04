const db = require('../index')
const Location = db.location

exports.locationSeed = () =>{
    Location.bulkCreate([
        {location_name: 'Warehouse FG'},
    ])
}