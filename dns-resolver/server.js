// Import the framework and instantiate it
import Fastify from 'fastify'
import { Config } from './config/config.js'
import { LoggerConfig } from './config/logger.js'

const fastify = Fastify({
  logger: LoggerConfig[Config.ENVIRONMENT]
})

fastify.use('/', )

// Declare a route
fastify.get('/ping', async function handler (request, reply) {
    return { 'error': false, 'message': 'Ping received !!' }
})
  
// Run the server!
try {
  await fastify.listen({ host: Config.HOST, port: Config.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}