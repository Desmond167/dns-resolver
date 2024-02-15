import { pingHandler } from '../controllers/baseController.js'
import { userRoutes } from './userRouters.js'

// Declare a route
function routes (fastify, opts, done) {
    fastify.get('/ping', pingHandler)
    fastify.register(userRoutes, { prefix: '/api/v1' })
    done()
}

export {
    routes
};