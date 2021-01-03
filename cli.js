#!/usr/bin/env node

var yarn = require('./App');
if(yarn()) console.log('This project has yarn')
else console.log('Nope . No Such Luck')