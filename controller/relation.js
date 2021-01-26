const RelationUseCase = require('../modals/useCases/relation')


module.exports.createRelation = async (req, res) => {

    try {
        console.log("req.body", req.body)
        const relationData = await RelationUseCase.create(req.body)
        console.log("code",relationData)

        if(relationData){
            return res.json({
                code: 200,
                status: 'success',
                message: 'Relation Created Successfully',
                relationData
            })
        }else{
            return res.json({
                code: 400,
                message: 'Relation Already Exists',
                data:''
            })
        }
    } catch (error) {

    }
}