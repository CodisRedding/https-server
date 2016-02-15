'use strict';

const runner = require('lab');
const code = require('code');
const config = require('../config');


const lab = exports.lab = runner.script();


lab.experiment('Config', () => {

  lab.test('it gets config data', (done) => {

    code.expect(config()).to.be.an.object();
    done();
  });
});
