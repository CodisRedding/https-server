'use strict';

const clientSocket = require('net');
const adaptor = require('microservice-adaptor');


const pingSvc = new adaptor({
  test: (callback, header, body, data) => {
    console.log('test call', header);
		data(header).type('text/plain');
  }
});

clientSocket
  .connect(8001, () => {
    console.log('c onConnect');
    clientSocket
      .pipe(pingSvc)
      .pipe(clientSocket);
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
