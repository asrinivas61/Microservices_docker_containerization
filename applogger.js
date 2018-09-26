'use strict';

const log4js = require('log4js');
const path = require('path');

const config = require('./config/');
const logDirectory = path.join(config.SERVER_ROOT, 'logs');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

log4js.configure(path.join(__dirname, './log4js.conf.json'), {
  cwd: logDirectory
});

const logger = log4js.getLogger();

module.exports = logger;