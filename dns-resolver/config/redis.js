import { Config } from './config';
import redis from 'redis';

const redisClient = redis.createClient({
    host: Config.REDIS_HOST,
    port: Config.REDIS_PORT,
  });

export { redisClient }