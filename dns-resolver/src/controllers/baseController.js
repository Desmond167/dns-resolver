async function pingHandler (request, reply) {
    return { 'error': false, 'message': 'Ping received !!' }
}

export { 
    pingHandler
};