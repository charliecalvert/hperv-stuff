
// fileToRead, sectionToChange, configFile
function modifyConfig(fileToRead, sectionToChange, configFile) {

	var fs = require('fs');

	var newIP = "";
	var data = fs.readFileSync(fileToRead, 'utf8');
	newIP = `Host ${sectionToChange}\n\tHostName ${data}`;
	console.log('NewIP:', newIP);

	var regExp = `Host ${sectionToChange}\n\tHostName .*\n`;
	console.log('REGEXP_STR', regExp);
	var go = new RegExp(regExp, 'm');


	var result = configFile.replace(go, newIP);

	return result;
}

exports.modifyConfig = modifyConfig;