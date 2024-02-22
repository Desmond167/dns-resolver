import { redisClient } from "../../config/redis.js";

// Function to set a key-value pair in Redis
const redisSet = async (key, value, ttl = null) => {
    // Ensure redisClient is properly initialized before calling set
    if (!redisClient) {
        throw new Error('Redis client is not initialized.');
    }

    try {
        let transaction = redisClient.multi().set(key, value);
        if (ttl) {
            transaction = transaction.expire(key, ttl);
        }
        await transaction.exec();
    } catch (error) {
        throw new Error(error);
    }
};


// Function to get a value from Redis
const redisGet = async (key) => {
    let value = null;

    // Ensure redisClient is properly initialized before calling get
    if (!redisClient) {
        reject(new Error('Redis client is not initialized.'));
        return;
    }

    try {
        value = await redisClient.get(key);
    } catch (error) {
        new Error(error);
    }

    return value;
};


// Function to set a key-value hash pair in Redis
const redisHset = async (key, value, ttl=null) => {
    // Ensure redisClient is properly initialized before calling set
    if (!redisClient) {
        throw new Error('Redis client is not initialized.');
    }

    try {
        let transaction = redisClient.multi().hSet(key, value);
        if (ttl) {
            transaction = transaction.expire(key, ttl);
        }
        await transaction.exec();
    } catch (error) {
        throw new Error(error);
    }
};


// Function to get a value from Redis
const redisHgetAll = async (key) => {
    let redisObj =null;

    // Ensure redisClient is properly initialized before calling get
    if (!redisClient) {
        reject(new Error('Redis client is not initialized.'));
        return;
    }

    try {
        redisObj = await redisClient.hGetAll(key);
        if (!Object.keys(redisObj).length) {
            redisObj = null;
        }
    } catch (error) {
        new Error(error);
    }

    return redisObj;
};


export { 
    redisSet,
    redisGet,
    redisHset,
    redisHgetAll
}