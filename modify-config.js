
// fileToRead, sectionToChange, configFile
function modifyConfig(args) {

	var fs = require('fs');

	var newIP = "";
	var data = fs.readFileSync(args[0], 'utf8');
	newIP = `Host ${args[1]}\n\tHostName ${data}`;
	console.log('NewIP:', newIP);

	var regExp = `Host ${args[1]}\n\tHostName .*\n`;
	console.log('REGEXP_STR', regExp);
	var go = new RegExp(regExp, 'm');


	var result = args[2].replace(go, newIP);

	return result;
}

exports.modifyConfig = modifyConfig;