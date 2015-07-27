var bl = require('bl');
var http = require('http');

var URL = process.argv[2];

function print_stats(string) {
	console.log(string.length);
	console.log(string);
}

http.get(URL, function(res) {
	res.pipe(bl(function(err, data) {
		if (err)
			console.log('error');

		var string = data.toString();

		print_stats(string);
	}));

});
