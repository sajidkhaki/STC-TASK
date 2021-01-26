/**
 * Created by sajidkhaki
 */

'use strict'
const Sequelize = require('sequelize')
const sequelizeConfig = require('../../datasource/db_config')

let RelationshipTable = sequelizeConfig.define('relationshipDetails', {
    relationship_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    person1_id: {
        type: Sequelize.INTEGER,

        /* Realtion with PersonTable
         Foreign Key with Person Table */
    },
    person2_id: {
        type: Sequelize.INTEGER,

        /* Realtion with PersonTable
        Foreign Key with Person Table */
    },
    relation_id: {
        type: Sequelize.INTEGER,

        /* Realtion with RelatioTable
        Foreign Key with Person Table */
    }
})

module.exports = RelationshipTable