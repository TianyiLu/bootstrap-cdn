#!/usr/bin/env node

/* eslint-env shelljs */

'use strict';

var version     = process.argv[2];

if (!version) {
    console.log('Valid Bootlint version required.');
    process.exit(1);
}

var path        = require('path');
var basedir     = path.join(__dirname, '..');
var bootlintDir = path.join(basedir, 'public', 'bootlint', version);
var UGLIFYJS    = path.join(basedir, 'node_modules/.bin/uglifyjs');

require('shelljs/global');

// strip leading 'v' if present
version = version.replace(/^v/, '$1');

pushd(bootlintDir);

exec(UGLIFYJS + ' bootlint.js -o bootlint.min.js ' +
  '--compress --source-map bootlint.min.js.map ' +
  '--comments "/(?:^!|@(?:license|preserve|cc_on))/"');

popd();
