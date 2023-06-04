const db = require('../index')
const Area1 = db.area1

exports.area1Seed = () =>{
    Area1.bulkCreate([
        {area_name: 'Incoming', loc_id: '1'},
        {area_name: 'Warehousing', loc_id: '1'},
        {area_name: 'Outgoing', loc_id: '1'},
        {area_name: 'Office', loc_id: '1'},
    ])
}