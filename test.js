//import { modifyConfig } from './try.js';
//import {fs} from 'fs';
//import * as fs from 'fs';
var { modifyConfig } = require('./try');
var fs = require('fs');
var files = fs.readdirSync('ip-files/');
const CONFIG_NAME = 'config';

console.log(files);

var configData = fs.readFileSync(CONFIG_NAME, 'utf8');
for (const file of files) {
  if (file != "README.md") {
    configData = modifyConfig([`ip-files/${file}`, file, configData]);
    console.log('RESLT', configData);
  }
}

console.log(configData);

fs.writeFile(CONFIG_NAME, configData, 'utf8', function (err) {
  if (err) return console.log(err);
});

return;

fs.readFile(CONFIG_NAME, 'utf8', function (err, configData) {
  if (err) {
    return console.log(err);
  }

  /* for (const file of files) {
      if (file != "README.md") {
          configData = modifyConfig([`ip-files/${file}`, file, configData ]);
          console.log('RESLT', configData);
      }
  } */

  const file = 'us01';
  configData = modifyConfig([`ip-files/${file}`, file, configData]);

  console.log(configData);

  /* fs.writeFile(CONFIG_NAME, configData, 'utf8', function (err) {
     if (err) return console.log(err);
  }); */
});

