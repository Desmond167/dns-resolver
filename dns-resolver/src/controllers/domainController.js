import { domainAddService } from '../services/domainService.js';
import  { lookup, parseLookupResult } from '../utils/domainLookup.js'
import { Config } from '../../config/config.js';

async function domainLookupHandler (request, reply) {
    try {
        const lookupResult = await lookup(request.query.domain, request.query.family, Config.CUSTOM_RESOLVER_IP );
        const parsedResult = parseLookupResult(lookupResult);
        console.log(parsedResult)
        request.query.name = request.query.domain;
        request.query.ipv4 = parsedResult.ipv4.join(',');
        request.query.ipv6 = parsedResult.ipv6.join(',');
        request.query.lastScan = new Date().toISOString();
        const domainData = await domainAddService(request, reply)
        reply.code(200)
        .send({ 
            error: false, 
            message: 'Domain details fetched',
            data: { 
                'domain': domainData.name,
                'ipv4': domainData.ipv4.split(','),
                'ipv6': domainData.ipv6.split(','),
            } 
        });
    } catch (error) {

        request.log.error(error.message)
    }
}

export { 
    domainLookupHandler
};