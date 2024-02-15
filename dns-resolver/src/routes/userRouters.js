import { userRegisterHandler } from '../controllers/userController.js'

// Declare a route
function userRoutes (fastify, opts, done) {
    fastify.post('/user/add', userRegisterHandler)
    done()
}

export {
    userRoutes
};