const RelationShipUseCase = require('../modals/useCases/relationShip')
const sequelizeConfig = require('../datasource/db_config')

module.exports.createRelationShip = async (req, res) => {

    try {
        const relationData = await RelationShipUseCase.create(req.body)
        console.log("code",relationData)

        if(relationData){
            return res.json({
                code: 200,
                status: 'success',
                message: 'Relationship Created Successfully',
                relationData
            })
        }else{
            return res.json({
                code: 400,
                message: 'Cannot Add Relationship',
                data:''
            })
        }
    } catch (error) {

    }
}

module.exports.getRelationShip = async (req, res) => {

    try {
let searchText = req.body.person1_id
        let requestData = await sequelizeConfig.query(`SELECT * from relationshipDetails inner join  personDetails on personDetails.person_id = relationshipDetails.person2_id
inner join relationTables on relationTables.relation_id=relationshipDetails.relation_id
                            where(person1_id is not null) AND (person1_id like ?)`, {
            replacements: [searchText],
            type: sequelizeConfig.QueryTypes.SELECT
        })

        console.log("++++++++Searched User++++++++")
        console.log(requestData)
        console.log("++++++++Searched User++++++++")

            return res.json({
                code: 200,
                status: 'success',
                requestData
            })

    }catch (e) {

    }
}