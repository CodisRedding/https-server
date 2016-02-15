'use strict';

const runner = require('lab');
const code = require('code');
const composer = require('../index');


const lab = exports.lab = runner.script();


lab.experiment('Server', () => {

  lab.test('it composes a server', (done) => {

    composer((err, composedServer) => {

      code.expect(composedServer).to.be.an.object();
      done(err);
    });
  });
});
