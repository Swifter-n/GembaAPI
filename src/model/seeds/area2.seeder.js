const db = require('../index')
const Area2 = db.area2

exports.area2Seed = () =>{
    Area2.bulkCreate([
        {area_name: 'Staging area', area_id: '1'},
        {area_name: 'Area Palletizing', area_id: '1'},
        {area_name: 'Area Repacking', area_id: '1'},
        {area_name: 'Racking 1', area_id: '2'},
        {area_name: 'Racking 2', area_id: '2'},
        {area_name: 'Open Area', area_id: '2'},
        {area_name: 'Staging Area', area_id: '3'},
        {area_name: 'Loading Dock 1', area_id: '3'},
        {area_name: 'Loading Dock 2', area_id: '3'},
        {area_name: 'Parking Area', area_id: '3'},
        {area_name: 'Admin Room', area_id: '4'},

    ])
}