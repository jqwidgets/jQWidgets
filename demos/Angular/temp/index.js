// This task autogenerates demos sample files.

const fs = require('fs');
const path = require('path');

walkSync('./');

function walkSync(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(function (file) {
		if (file === 'src' || file === 'node_modules' || file ==='temp') {
			return true;
		}
	   
	    const newDir = path.join(dir, file);
		if (fs.statSync(newDir).isDirectory()) {
		  	
			const components = fs.readdirSync(newDir);
			
			/* Remove files
			console.log(newDir);
			const packagejson = path.join(newDir, 'package.json');
			const tsconfig = path.join(newDir, 'tsconfig.json');
			const angular = path.join(newDir, 'angular.json');
			if(fs.existsSync(packagejson)) {
				fs.unlinkSync(packagejson);
			}
			if(fs.existsSync(tsconfig)) {
				fs.unlinkSync(tsconfig);
			}
			if(fs.existsSync(angular)) {
				fs.unlinkSync(angular);
			}
			console.log(packagejson);
			console.log(tsconfig);
			console.log(angular);
			*/
			/* Add files */
  		    components.forEach(function (file) {
				const demoDir = path.join(newDir, file);
				if (fs.statSync(demoDir).isDirectory()) {
					createFiles(demoDir);
				}
			});
		}
    });
}

function createFiles(dir) {
    fs.readFile('./temp/package.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

	    createFile(dir, data, 'package.json');          
    });
    fs.readFile('./temp/tsconfig.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

	    createFile(dir, data, 'tsconfig.json');          
    });	
    fs.readFile('./temp/angular.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

	    createFile(dir, data, 'angular.json');          
    });		
}

function createFile(dir, data, index) {
	fs.truncateSync(dir + '\\' + index);
    fs.appendFile(dir + '\\' + index, data, function (err) {
		if (err) console.log('error at "appendFile"   =>   ' + err);
	});
}