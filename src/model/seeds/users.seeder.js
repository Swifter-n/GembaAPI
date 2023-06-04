const db =  require('../index')
const User = db.user

exports.userSeed = () => {
    // User.create({
    //     name: 'ibnu Saputra',
    //     phone: '628211148073',
    //     email: 'ibnu.saputra@suntorygaruda.com',
    //     password: '$2y$10$qdaQcGn83gXBUS2MheoP0ucbKVRgwZZD8uaye/c.AG5.0MFMLqGyq',
    //     role: '',
    //     plant: ''
    // })
    User.bulkCreate([
        {
        name: 'ibnu Saputra',
        phone: '628211148073',
        email: 'ibnu.saputra@suntorygaruda.com',
        password: '$2y$10$qdaQcGn83gXBUS2MheoP0ucbKVRgwZZD8uaye/c.AG5.0MFMLqGyq',
        role_id: '2',
        plant_id: '7',
        },
        {
        name: 'Iwan Purnomo',
        phone: '62821221332',
        email: 'iwan.purnomo@suntorygaruda.com',
        password: '$2y$10$qdaQcGn83gXBUS2MheoP0ucbKVRgwZZD8uaye/c.AG5.0MFMLqGyq',
        role_id: '1',
        plant_id: '7',
            },
    ])
}