/**
 * Created by sajidkhaki
 */

'use strict'
const Sequelize = require('sequelize')
const sequelizeConfig = require('../../datasource/db_config')

let PersonTable = sequelizeConfig.define('personTable', {
    person_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

module.exports = PersonTable