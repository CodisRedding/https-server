'use strict';

const runner = require('lab');
const code = require('code');
const config = require('../../config');
const hapi = require('hapi');
const indexPlugin = require('../../api/index');


const lab = exports.lab = runner.script();
let request;
let server;


lab.beforeEach((done) => {

  const plugins = [indexPlugin];
  server = new hapi.Server();
  server.connection({port: config('port')});
  server.register(plugins, (err) => {

    if (err != null) {
      return done(err);
    }

    done();
  });
});


lab.experiment('Index Plugin', () => {

  lab.beforeEach((done) => {

    request = {
      method: 'GET',
      url: '/'
    };

    done();
  });


  lab.test('it returns the default message', (done) => {

    server.inject(request, (response) => {

      code.expect(response.result.message).to.match(/@premise development/i);
      code.expect(response.statusCode).to.equal(200);

      done();
    });
  });
});
