full_path = process.argv[2];
filter = process.argv[3];

fs = require('fs');
path = require('path');

fs.readdir(full_path, function(err, list) {
	if (err)
		console.log("error!");

	var regex = new RegExp(filter, "g");;

	list.forEach(function(entry) {

		if (path.extname(entry).match(regex)) {
			console.log(entry); 
		}
	});
}); 
