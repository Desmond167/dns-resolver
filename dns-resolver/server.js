// Import the framework and instantiate it
import Fastify from 'fastify'
import { Config } from './config/config.js'
import { LoggerConfig } from './config/logger.js'
import { routes } from './src/routes/baseRouters.js'
import { connectDatabase } from './src/utils/onReadyHooks.js'

const fastify = Fastify({
  logger: LoggerConfig[Config.ENVIRONMENT]
})

fastify.register(routes, { prefix: '/' })
fastify.addHook('onReady', connectDatabase)

// Run the server!
try {
  await fastify.listen({ host: Config.HOST, port: Config.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}