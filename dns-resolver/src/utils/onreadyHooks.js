import { redisClient } from "../../config/redis.js";
import { Config } from "../../config/config.js";

function connectRedis(done) {
    try {
        redisClient.connect()
    } catch(error) {
        console.log('Failed to connect to redis', error);
    }
    done()
}

export { connectRedis }