'use strict';

const nconf = require('nconf');


nconf.env()
  .file(`./${process.env.NODE_ENV}.json`);

module.exports = (key) => {
  return nconf.get(key);
};
