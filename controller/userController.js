const Users = require('../model/userModel.js')
const bcrypt = require('bcrypt')

const getAllUsers = async (request, response) => {
  const data = await Users.grabUsersFromDB()
  response.send(data.rows)
}

const loginAuthentication = async (request, response) => {

    let data = await Users.grabUsersDataByEmailFromDB(request.params.email)
    if (data.rows[0]) {
        let password = await Users.grabPasswordByEmailFromDB(request.params.email);
       
        // bcrypt.compare is a promise. You must await. 
        const passCheck = await bcrypt.compare(request.params.password, password.rows[0].password);
        
        if (passCheck) {
            response.send({ alert: "loged in", data: data.rows[0] })
        } else {
            response.send({ alert: 'invalid log in' })
        }
    } else {
      response.send({ alert: 'invalid log in' })
    }
}

const addUserInfo = async (request, response) => {
    let userInfo = request.body
    console.log(userInfo)
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userInfo.password, salt);
    console.log(hashedPassword);
    const post = await Users.createAccountToDB( userInfo.username, userInfo.email, hashedPassword, userInfo.badged_id)
    return response.send(post.rows)
}

module.exports = {
  getAllUsers,
  loginAuthentication,
  addUserInfo
}
