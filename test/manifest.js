'use strict';

const runner = require('lab');
const code = require('code');
const manifest = require('../manifest');


const lab = exports.lab = runner.script();


lab.experiment('Manifest', () => {

  lab.test('it gets manifest data', (done) => {

    code.expect(manifest).to.be.an.object();
    done();
  });
});
