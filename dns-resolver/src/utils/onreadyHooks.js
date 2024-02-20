import { redisClient } from "../../config/redis.js";

function connectRedis(done) {
    try {
        redisClient.connect()
    } catch(error) {
        console.log('Failed to connect to redis', error);
    }
    done()
}

export { connectRedis }