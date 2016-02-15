'use strict';


const api = {
  register: (server, options, next) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply({message: '@premise development'});
      }
    });

    next();
  }
};

api.register.attributes = {
  name: 'api'
};

module.exports = api;
