'use strict';

const net = require('net');
const adaptor = require('service-adapter');
const config = require('config');


const pingSvc = new adaptor({
  ping: (callback, header, body, data) => {
    console.log('test call', header);
		data(header).type('text/plain');
  }
});

const pingConfig = config.get('microservices.ping');

const client = net
  .connect(pingConfig.port, pingConfig.host, () => {
    console.log('c onConnect');
    client
      .pipe(pingSvc)
      .pipe(client);
  });

const api = {
  register: (server, options, next) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        console.log('http client connect');
        pingSvc.data = reply;
        pingSvc._callback('ping', 'ping');
      }
    });

    next();
  }
};

api.register.attributes = {
  name: 'api'
};

module.exports = api;
