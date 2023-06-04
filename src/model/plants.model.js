module.exports = (sequelize, Sequelize) => {
    const Plant = sequelize.define('plants', {
        plant_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        plant_code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })

    return Plant
}