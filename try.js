
// fileToRead, sectionToChange, configFile
function modifyConfig(args) {
  
  var fs = require('fs');

  var newIP = "";
  var data = fs.readFileSync(args[0], 'utf8');
  newIP = `Host ${args[1]}\n\tHostName ${data}`;
  console.log('NewIP:', newIP);
  /* fs.readFile(args[0], 'utf8', function (err, data) {
    if (err) {
      console.log(`Could not read ${args[0]}`);
      return console.log(err);
    }

    //newIP = "Host bitbucket.com\n\tHostName " + data;
    newIP = `Host ${args[1]}\n\tHostName ${data}`;
    console.log('NewIP:', newIP);
  }); */

  var regExp = `Host ${args[1]}\n\tHostName .*\n`;
  console.log('REGEXP_STR', regExp)
  var go = new RegExp(regExp, 'm');


  var result = args[2].replace(go, newIP);
  //console.log(result);

  return result;

}

exports.modifyConfig = modifyConfig;