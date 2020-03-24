const express = require('express')

const controllers = require('../controllers')
const middlewares = require('../middlewares')

const routes = () => {
  const apiRoute = express.Router()
  apiRoute.use(middlewares.logMiddleWare)
  const userController = controllers.userController()
  apiRoute.route('/user/login').post(userController.login)
  apiRoute.route('/user/logout').post(userController.logout)
  apiRoute.use(middlewares.authMiddleWare)
  apiRoute.route('/users').get(userController.getAllUser)
  apiRoute.route('/user/:id')
    .delete(userController.deleteUser)
    .put(userController.updateUser)
    .get(userController.getUser)

  return apiRoute
}

module.exports = routes
