function modifyConfig(args) {
  
  //import defaultExport, * as fs from 'fs';
  var fs = require('fs')
  //import { readFile } from 'fs';

  //var args = process.argv.slice(2);
  console.log("args:", args);

  var newIP = "";

  fs.readFile(args[0], 'utf8', function (err, data) {
    if (err) {
      console.log(`Could not read ${args[0]}`);
      return console.log(err);
    }

    //newIP = "Host bitbucket.com\n\tHostName " + data;
    newIP = `Host ${args[1]}\n\tHostName ${data}`;
    //console.log('NewIP:', newIP);
  });

  fs.readFile('config', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var go = new RegExp(`Host ${args[1]}\n\tHostName .*\n`, 'm')
    var result = data.replace(go, newIP);
    //console.log(result);

    fs.writeFile(someFile, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });

}

exports.modifyConfig = modifyConfig;