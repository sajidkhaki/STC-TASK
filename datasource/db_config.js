/**
 * Created by sajidkhaki
 */
let Sequelize = require('sequelize')
let config = require('../datasource/connection_strings').local

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  timezone: '+05:30',
  operatorsAliases: Sequelize.Op,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

sequelize.sync({
  force: false
})

module.exports = sequelize