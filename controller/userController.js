const Users = require('../model/userModel.js')

const getAllUsers = async (request, response) => {
    let data = await Users.grabUsersFromDB()
    response.send(data.rows)
}

const loginAuthentication = async (request, response) => {
    let data = await Users.grabUsersDataByEmailFromDB(request.params.email)
    if (data.rows[0]) {
        let password = await User.grabPasswordByEmailFromDB(request.params.email)
        if (password.rows[0].password === request.params.password) {
            rep.send({ alert: "loged in", data: data.rows[0] })
        } else {
            response.send({ alert: 'invalid log in' })
        }
    } else {
        response.send({ alert: "invalid log in" })
    }
}

const addUserInfo = async (request, response) => {
    let userInfo = request.body
    const post = await Users.createAccountToDB(userInfo.email, userInfo.username, userInfo.password)
    return response.send(post.rows)
}

module.exports = {
    getAllUsers,
    loginAuthentication,
    addUserInfo
}