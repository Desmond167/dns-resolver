import { redisHgetAll, redisHset } from '../services/redisService.js';
import  { lookup } from '../utils/domainLookup.js'
import  { parseLookupResult } from '../utils/parse.js'
import { Config } from '../../config/config.js';

async function domainLookupHandler (request, reply) {
    try {
        let redisData = await redisHgetAll(request.query.domain);

        if (!redisData) {
            const lookupResult = await lookup(request.query.domain, request.query.family, Config.CUSTOM_RESOLVER_IP );
            const parsedResult = parseLookupResult(lookupResult);

            redisData = {}
            redisData.ipv4 = parsedResult.ipv4.join(',');
            redisData.ipv6 = parsedResult.ipv6.join(',');

            await redisHset(request.query.domain, redisData, ttl=30);
        }
        
        reply.code(200)
        .send({ 
            error: false, 
            message: 'Lookup successful',
            data: { 
                'domain': request.query.domain,
                'ipv4': redisData.ipv4.split(','),
                'ipv6': redisData.ipv6.split(','),
            } 
        });
    } catch (error) {

        request.log.error(error.message)
    }
}

export { 
    domainLookupHandler
};