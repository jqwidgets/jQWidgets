// This task autogenerates demos sample files.

const fs = require('fs');
const path = require('path');

walkSync('./');

function walkSync(dir) {
    const files = fs.readdirSync(dir);

	let data = `
		<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title>Javascript ES6 Demos</title>
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
			<link rel="stylesheet" type="text/css" href="styles.css" />
		</head>
		<body class="viewport">
			<ul>
	`	

    files.forEach(function (file) {
		if (file === 'src' || file === 'node_modules' || file ==='temp' || file === 'index.js' || file === 'images' || file === 'styles') {
			return true;
		}
	    
		if (file.indexOf('.js') >= 0 || file.indexOf('.ts') >= 0|| file.indexOf('.json') >= 0 || file === 'index.htm') {
			return true;
		}
		
		if (file.indexOf('angular-') === -1) {
			return true;
		}
		
		const componentDirectory = path.join(dir, file);
		
		data += '\n\r';
		data += '		<li>' + componentDirectory;
		
		if (fs.statSync(componentDirectory).isDirectory()) {
			const subFiles = fs.readdirSync(componentDirectory);
		   
			data += '\n\r';
			data += '			<ul>';
			data += '\n\r';
			
		   subFiles.forEach(function (file) {
				if (file === 'src' || file === 'node_modules' || file ==='temp') {
					return true;
				}
			
				if (file === 'index.htm') {
					const index = path.join(componentDirectory, file)
					fs.unlinkSync(index);
				}
				
				if (file.indexOf('.js') >= 0 || file.indexOf('.ts') >= 0|| file.indexOf('.json') >= 0 || file === 'index.htm') {
					return true;
				}
				
			
				const demoDirectory = path.join(componentDirectory, file);
				data += '\n\r' + 
				'				<li><a href="' + demoDirectory + '">' + file.replace(/-/ig, ' ')  + '</a></li>';			
			});
			
			data += '\n\r';
			data += '			</ul>';
			data += '\n\r';
			data += '		</li>';
			
		}			
    });
	
	data += `
	</ul>
</body>
</html>
`
	createFile(dir, data, 'index.htm');
}

function createFiles(dir, elementName, demoName, data) {
	console.log(dir);
	
	if(fs.existsSync(dir + '\\index.htm')) {
		data += '<li><a href="' + dir + '\index.htm' + '"' + demoName + '</a></li>'
	}
}

function createFile(dir, data, index) {
	if(fs.existsSync(dir + '\\' + index)) {
		fs.truncateSync(dir + '\\' + index);
	}
    fs.appendFile(dir + '\\' + index, data, function (err) {
		if (err) console.log('error at "appendFile"   =>   ' + err);
	});
}