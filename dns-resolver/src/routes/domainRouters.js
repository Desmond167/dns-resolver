import { domainLookupHandler, domainResolve4Handler, domainResolve6Handler } from '../controllers/domainController.js'

// Declare a route
function domainRoutes (fastify, opts, done) {
    fastify.get('/domain/lookup', domainLookupHandler)
    fastify.get('/domain/resolve/4', domainResolve4Handler)
    fastify.get('/domain/resolve/6', domainResolve6Handler)
    done()
}

export {
    domainRoutes
};