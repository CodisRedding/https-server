'use strict';

const config = require('./config');
const pkg = require('./package.json');


module.exports = {
  server: {
    debug: {
      request: ['error']
    },
    connections: {
      routes: {
        security: true
      }
    }
  },
  connections: [{
    port: config('port'),
    labels: config('labels')
  }],
  registrations: [
    {plugin: 'inert'},
    {plugin: 'vision'},
    {plugin: 'hapi-swagger'},
    {
      plugin: './api/index',
      options: {
        routes: {prefix: '/api'}
      }
    }
  ]
};
