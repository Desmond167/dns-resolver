import { domainLookupHandler } from '../controllers/domainController.js'

// Declare a route
function domainRoutes (fastify, opts, done) {
    fastify.get('/domain/lookup', domainLookupHandler)
    done()
}

export {
    domainRoutes
};