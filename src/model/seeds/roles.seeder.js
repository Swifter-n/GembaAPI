const db =  require('../index')
const Roles = db.roles

exports.roleSeed = () => {
    Roles.bulkCreate([
        {role_name: 'Harewouse Head'},
        {role_name: 'Supervisor Warehouse'},
        {role_name: 'Supervisor Delivery'},
    ])
}