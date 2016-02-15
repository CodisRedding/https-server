'use strict';

const glue = require('glue');
const manifest = require('./manifest');


const composeOptions = {
  relativeTo: __dirname
};

module.exports = glue.compose.bind(glue, manifest, composeOptions);
