const express = require('express')
const userRouter = express.Router()
const usersController = require('../controller/userController.js')

userRouter.get("/users", usersController.getAllUsers)
userRouter.get("/:email/:password", usersController.loginAuthentication)

userRouter.post("/new_user", usersController.addUserInfo)

module.exports = userRouter

