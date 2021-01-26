const userUseCase = require('../modals/useCases/users')


module.exports.create = async (req, res) => {

    try {
        console.log("req.body", req.body)
        const userData = await userUseCase.createDetails(req.body)
        console.log("userData",userData)

        if(userData!==400){
                    return res.json({
                        code: 200,
                        status: 'success',
                        message: 'Person Details Created Successfully',
                        userData
                    })
                }else{
                    return res.json({
                        code: 400,
                        message: 'FirstName Should Be Unique',
                        data:''
                    })
                }
    } catch (error) {

    }
}