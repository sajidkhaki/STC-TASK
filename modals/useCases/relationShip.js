
const RelationShipData = require('../entitities/relationship_table')


async function create(params) {
    try {
            return await RelationShipData.create({
                person1_id:params.person1_id,
                person2_id:params.person2_id,
                relation_id:params.relation_id
            })

    } catch (err) {
        throw err
    }
}

module.exports = {
    create
}