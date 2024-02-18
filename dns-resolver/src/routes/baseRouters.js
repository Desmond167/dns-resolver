import { pingHandler } from '../controllers/baseController.js'
import { domainRoutes } from './domainRouters.js'

// Declare a route
function routes (fastify, opts, done) {
    fastify.get('/ping', pingHandler)
    fastify.register(domainRoutes, { prefix: '/api/v1' })
    done()
}

export {
    routes
};