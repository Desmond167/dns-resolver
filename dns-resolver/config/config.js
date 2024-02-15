
class Config {
    static ENVIRONMENT = process.env.ENVIRONMENT || 'development'
    static LOGLEVEL = process.env.LOGLEVEL || 'info'
    static LOGFILE = process.env.LOGFILE || '/var/log/app.log'
    static HOST = process.env.HOST || '127.0.0.1'
    static PORT = process.env.PORT || 3000
    static SQLITE_FILE = process.env.SQLITE_FILE || './data.db'
  };
  
export { Config };