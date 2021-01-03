#!/usr/bin/env node

var yarn = require('./App'),
chalk = require('chalk');
if(yarn()) console.log(chalk.green('This project has yarn'))
else console.log(chalk.red('Nope . No Such Luck'))