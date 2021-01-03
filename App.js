var fs = require('fs'),
path = require('path');
module.exports = () => fs.existsSync(path.resolve(process.cwd(), 'yarn.lock'));