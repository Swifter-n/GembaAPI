module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define('roles', {
        role_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })

    return Roles
}