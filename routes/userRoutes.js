const express = require('express')
const userRouter = express.Router()
const usersController = require('../controller/userController.js')

userRouter.get('/users', usersController.getAllUsers)
//username for user is located in local storage on sign in
userRouter.get('/users/:username', usersController.getUsernameAndEmail)
userRouter.get('/:email/:password', usersController.loginAuthentication)

userRouter.post('/new_user', usersController.addUserInfo)

module.exports = userRouter
