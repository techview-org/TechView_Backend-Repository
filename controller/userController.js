const Users = require('../model/userModel.js')

const getAllUsers = async (request, response) => {
    let data = await Users.grabUsersFromDB()
    response.send(data.rows)
}

const getUserById = async (request, response) => {
    let userId = request.params.id
    
    const userData = await Users.grabUserByIdFromDB(userId)
    const username = userData.rows[0].username
    response.send(username)
}

const loginAuthentication = async (request, response) => {
    let data = await Users.grabUsersDataByEmailFromDB(request.params.email)
    if (data.rows[0]) {
        let password = await Users.grabPasswordByEmailFromDB(request.params.email)
        if (password.rows[0].password === request.params.password) {
            response.send({ alert: "loged in", data: data.rows[0] })
        } else {
            response.send({ alert: 'invalid log in' })
        }
    } else {
        response.send({ alert: "invalid log in" })
    }
}

const addUserInfo = async (request, response) => {
    let userInfo = request.body
    console.log(userInfo)
    const post = await Users.createAccountToDB(userInfo.username, userInfo.email, userInfo.password, userInfo.badged_id)
    return response.send(post.rows)
}

module.exports = {
    getAllUsers,
    getUserById,
    loginAuthentication,
    addUserInfo
}