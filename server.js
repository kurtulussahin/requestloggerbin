'use strict'

var app = require('./src')
var dotenv = require('dotenv')
var pkg = require('./package')

dotenv.config({ silent: true })

var options = {
  port: process.env.PORT,
  quiet: process.env.QUIET,
  redis: process.env.REDIS_URL
}

app(options, function () {
  console.info('starting server on port: %d', options.port);
  console.info('quiet: %s', options.quiet);
  console.info('redis: %s', options.redis);
})
