module.exports = (sequelize, Sequelize) => {
    const gemba_submission = sequelize.define('gemba_submission', {
        jobID: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        userID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        area1: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        area2: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gemba_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        categories: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        owner_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        assignTo: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        photoBefore: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        photoAfter: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        dateJob: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        dueDate: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        commentJob: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        statusJob: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        score: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        remark: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    }) 
    return gemba_submission
}
