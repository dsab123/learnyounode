var ls = require('./module_filtered_ls.js');

var arr = ls(process.argv[2], process.argv[3], function(err, data) {
	if (err)
		console.log("there was an error");

	data.forEach(function(entry) {
		console.log(entry);
	});
});


