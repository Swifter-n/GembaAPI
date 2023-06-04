const db = require('../index')
const Plant = db.plant


exports.plantSeed = () =>{
   Plant.bulkCreate([
    {plant_name: 'Head Office', plant_code:'3400'},
    {plant_name: 'Sidoarjo', plant_code:'3106'},
    {plant_name: 'Sidoarjo_2', plant_code:'3404'},
    {plant_name: 'Pati', plant_code:'3102'},
    {plant_name: 'Lampung', plant_code:'3103'},
    {plant_name: 'Tangerang', plant_code:'3104'},
    {plant_name: 'Gunung Putri', plant_code:'3105'},
    {plant_name: 'Makasar', plant_code:'3107'},
    {plant_name: 'Pekanbaru', plant_code:'3108'},
    {plant_name: 'Banjarmasin', plant_code:'3110'},
   ])
}