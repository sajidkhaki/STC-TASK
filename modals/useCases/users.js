const personData = require('../entitities/persons_table')
const personDetails = require('../entitities/persons_details')



async function createDetails(params) {
    try {
        let person =  await personData.create({
            // person_id:''
        })

        if(person){
            let person_id = person.person_id

            let uniqueName = await personDetails.findOne({
                where: {
                    firstName:params.firstName
                }
            })
            if(!uniqueName){
                return await personDetails.create({
                    firstName:params.firstName,
                    lastName:params.lastName,
                    age:params.age,
                    person_id:person_id
                })
            }else{
                let errorCode = 400
                return (errorCode)
            }

        }

    } catch (err) {
        throw err
    }
}



module.exports = {
    createDetails
}