
class Config {
    static ENVIRONMENT = process.env.ENVIRONMENT || 'development'
    static LOGLEVEL = process.env.LOGLEVEL || 'info'
    static LOGFILE = process.env.LOGFILE || '/var/log/app.log'
    static HOST = process.env.HOST || '127.0.0.1'
    static PORT = process.env.PORT || 3000
    static CUSTOM_RESOLVER_IP = process.env.CUSTOM_RESOLVER_IP || '8.8.8.8'
    static REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
    static REDIS_PORT = process.env.REDIS_PORT || 6379
  };
  
export { Config };