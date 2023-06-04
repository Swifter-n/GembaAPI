module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define('location', {
        location_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })

    return Location
}