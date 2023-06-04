'use strict';
const {Sequelize, QueryTypes} = require('sequelize')

const config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
  },
      timezone:'+07:00',
      freezeTableName: true,
      
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        charset: config.charset,
        collate: config.collate,
        dialectOptions: {
            useUTC: config.dialectOptions.useUTC,
            dateStrings: config.dialectOptions.dateStrings,
            typeCast: config.dialectOptions.typeCast,
        },
        timezone: config.timezone,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle,
        },
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db