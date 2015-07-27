var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', function(err, buffer) {
	if (err)
		console.log("error")
	
	console.log(buffer.split("\n").length - 1);
	
});
