'use strict';

const net = require('net');
const adaptor = require('microservice-adaptor');


const pingSvc = new adaptor({
  ping: (callback, header, body, data) => {
    console.log('test call', header);
		data(header).type('text/plain');
  }
});

const client = net
  .connect(8001, () => {
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
        pingSvc._callback('ping', 'derp');
      }
    });

    next();
  }
};

api.register.attributes = {
  name: 'api'
};

module.exports = api;
