
const RelationData = require('../entitities/relations_table')


async function create(params) {
    try {
        let relation = await RelationData.findOne({
            where: {
                relation_title:params.relation_title
            }
        })
        if (!relation) {
            return await RelationData.create({
                relation_title:params.relation_title
            })
        }else{
            let errorCode = 400
            return (errorCode)
        }

    } catch (err) {
        throw err
    }
}

module.exports = {
    create
}