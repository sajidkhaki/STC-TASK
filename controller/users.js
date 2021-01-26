const userUseCase = require('../modals/useCases/users')

const personDetails = require('../modals/entitities/persons_details')
const Sequelize = require('sequelize')
const Op = Sequelize.Op



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

module.exports.getAllPersons = async (req, res) => {
    console.log("Query",req.query )
    // try {
    //         const start = parseInt(req.query.start);
    //         const length = parseInt(req.query.length);
    //         const draw = req.query.draw;
    //         // const searchText = req.query.search.value ? req.query.search.value :'sajid'
    //          const searchText = 'sajid'
    //
    //         const total = await personDetails.findAndCountAll({
    //             where: {
    //                 [Op.or]: [{
    //                     firstName: {
    //                         [Op.like]: '%' + searchText + '%'
    //                     }
    //                 },
    //                     {
    //                         lastName: {
    //                             [Op.like]: '%' + searchText + '%'
    //                         }
    //                     },
    //                     {
    //                         age: {
    //                             [Op.like]: '%' + searchText + '%'
    //                         }
    //                     },
    //                     {
    //                         person_id: {
    //                             [Op.like]: '%' + searchText + '%'
    //                         }
    //                     }
    //                 ]
    //             }
    //         })
    //         const recordTotal = total.count
    //
    //         console.log("Records Total", recordTotal)
    //
    //         const usersData = await personDetails.findAll({
    //             where: {
    //
    //                 [Op.or]: [{
    //                     firstName: {
    //                         [Op.like]: '%' + searchText + '%'
    //                     }
    //                 },
    //                     {
    //                         lastName: {
    //                             [Op.like]: '%' + searchText + '%'
    //                         }
    //                     },
    //                     {
    //                         age: {
    //                             [Op.like]: '%' + searchText + '%'
    //                         }
    //                     },
    //                     {
    //                         person_id: {
    //                             [Op.like]: '%' + searchText + '%'
    //                         }
    //                     }
    //                 ]
    //
    //             },
    //             limit: length,
    //             offset: start
    //         })
    //         res.json({
    //             'draw': draw,
    //             'recordsTotal': recordTotal,
    //             'recordsFiltered': recordTotal,
    //             data: usersData
    //         })
    //
    //
    //     } catch (e) {
    //         console.log(e)
    //         res.send(e)
    //      }


    try {
        const allUsersData = await personDetails.findAll()

        console.log("users In database", allUsersData )

        if(allUsersData){
            return res.json({
                code: 200,
                status: 'success',
                allUsersData
            })
        }
        return res.json({
            code: 400,
            message: 'No Data Found',
            data:''
        })
    }catch (e) {

    }
}