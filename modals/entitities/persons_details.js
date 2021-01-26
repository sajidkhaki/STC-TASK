/**
 * Created by sajidkhaki
 */

'use strict'
const Sequelize = require('sequelize')
const sequelizeConfig = require('../../datasource/db_config')

let PersonDetails = sequelizeConfig.define('personDetails', {
    detail_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    person_id: {
        type: Sequelize.INTEGER,

        //Foreign Key with person Tabale
    },
    firstName: {
        type: Sequelize.STRING,
        unique: true
    },
    lastName: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
})

module.exports = PersonDetails