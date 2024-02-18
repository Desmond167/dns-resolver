// Function to set a key-value pair in Redis
const redisSet = (key, value) => {
    client.set(key, value, (err, reply) => {
        if (err) {
            console.error('Error setting key:', err);
        }
    });
};

// Function to get a value from Redis
const redisGet = (key) => {
    client.get(key, (error, value) => {
    if (error) {
        console.error(`Error getting key "${key}": ${error}`);
        return null;
    }
    return value
    });
}

export { redisSet, redisGet }