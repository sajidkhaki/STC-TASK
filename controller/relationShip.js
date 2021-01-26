const RelationShipUseCase = require('../modals/useCases/relationShip')


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