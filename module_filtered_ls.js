fs = require('fs');
path = require('path');
var arr = [];

module.exports = function(full_path, filter, callback) {

	fs.readdir(full_path, function(err, list) {
		if (err)
			return callback(err);
	
		var regex = new RegExp(filter, "g");;
	
		list.forEach(function(entry) {
	
			if (path.extname(entry).match(regex)) {
				arr.push(entry); 
			}
		});
	
		callback(null, arr);	
	});
};

