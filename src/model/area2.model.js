module.exports = (sequelize, Sequelize) => {
    const Area2 = sequelize.define('area2', {
        area_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        area_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    })

    return Area2
}