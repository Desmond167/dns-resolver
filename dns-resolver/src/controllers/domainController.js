import { redisHgetAll, redisHset } from '../services/redisService.js';
import  { lookup } from '../utils/domainLookup.js'
import  { resolve4, resolve6 } from '../utils/domainResolve.js'
import  { parseLookupResult } from '../utils/parse.js'
import { Config } from '../../config/config.js';

async function domainLookupHandler (request, reply) {
    try {
        let redisData = await redisHgetAll(request.query.domain);

        if (!redisData || !redisData.ipv4 || redisData.ipv6) {
            const lookupResult = await lookup(request.query.domain, request.query.family, Config.CUSTOM_RESOLVER_IP );
            const parsedResult = parseLookupResult(lookupResult);

            redisData = {}
            redisData.ipv4 = parsedResult.ipv4.join(',');
            redisData.ipv6 = parsedResult.ipv6.join(',');

            await redisHset(request.query.domain, redisData, Config.CACHE_EXPIRE_SECONDS);
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


async function domainResolve4Handler (request, reply) {
    try {
        let redisData = await redisHgetAll(request.query.domain);

        if (!redisData || !redisData.ipv4Resolve) {
            const resolvedIpv4 = await lookup(request.query.domain, 4, Config.CUSTOM_RESOLVER_IP, false );

            redisData = {}
            redisData.ipv4Resolve = resolvedIpv4;

            await redisHset(request.query.domain, redisData, 30);
        }
        
        reply.code(200)
        .send({ 
            error: false, 
            message: 'Ipv4 resolve successful',
            data: { 
                'domain': request.query.domain,
                'ipv4Resolve': redisData.ipv4Resolve
            } 
        });
    } catch (error) {

        request.log.error(error.message)
    }
}


async function domainResolve6Handler (request, reply) {
    try {
        let redisData = await redisHgetAll(request.query.domain);

        if (!redisData || !redisData.ipv6Resolve) {
            const resolvedIpv6 = await lookup(request.query.domain, 6, Config.CUSTOM_RESOLVER_IP, false );

            redisData = {}
            redisData.ipv6Resolve = resolvedIpv6;

            await redisHset(request.query.domain, redisData, 30);
        }
        
        reply.code(200)
        .send({ 
            error: false, 
            message: 'Ipv6 resolve successful',
            data: { 
                'domain': request.query.domain,
                'ipv6Resolve': redisData.ipv6Resolve
            } 
        });
    } catch (error) {

        request.log.error(error.message)
    }
}


export { 
    domainLookupHandler,
    domainResolve4Handler,
    domainResolve6Handler
};