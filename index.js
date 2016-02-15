'use strict';

const composer = require('./composer');


composer((err, server) => {
  if (err) {
    throw err;
  }

  server.start(() => {
    console.log('service on port ' + server.info.port);
  });
});

module.exports = composer;
