//import { modifyConfig } from './try.js';
//import {fs} from 'fs';
//import * as fs from 'fs';
var { modifyConfig } = require('./try');
var fs = require('fs');
var files = fs.readdirSync('ip-files/');

console.log(files);

for (const file of files) {
    if (file != "README.md") {
        modifyConfig([`ip-files/${file}`, file]);
    }
}