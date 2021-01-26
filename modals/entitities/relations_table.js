/**
 * Created by sajidkhaki
 */

'use strict'
const Sequelize = require('sequelize')
const sequelizeConfig = require('../../datasource/db_config')

let RelationTable = sequelizeConfig.define('relationTable', {
    relation_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    relation_title: {
        type: Sequelize.STRING,
    }

})

module.exports = RelationTable