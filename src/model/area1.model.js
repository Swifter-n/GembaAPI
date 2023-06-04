module.exports = (sequelize, Sequelize) => {
    const Area1 = sequelize.define('area1', {
        area_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        loc_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    })

    return Area1
}