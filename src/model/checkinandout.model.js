
module.exports = (sequelize, Sequelize) => {
    const checkInandOut  = sequelize.define('checkinandout',{
        checkIn: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        checkOut: {
            type: Sequelize.STRING,
            allowNull: true
        },
        longtitude :{
            type: Sequelize.STRING,
            allowNull: false,
        },
        latitude : {
            type: Sequelize.STRING,
            allowNull: false,
        },
        check_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        userID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    })
    return checkInandOut
}