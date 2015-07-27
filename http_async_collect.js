var bl = require('bl');
var http = require('http');

var URL1 = process.argv[2];
var URL2 = process.argv[3];
var URL3 = process.argv[4];
var urls = [];
var string1 = '';
var string2 = '';
var string3 = '';
var server1_done = false;
var server2_done = false;
var server3_done = false;


function collect_stats(url, string) {
	if (url == URL1) {
		string1 = string1.concat(string);
	} else if (url == URL2) {
		string2 = string2.concat(string);
	} else if (url == URL3) {
		string3 = string3.concat(string);
	}
}

function end_stats(url) {
	if (url == URL1) {
		server1_done = true;
	} else if (url == URL2) {
		server2_done = true;
	} else if (url == URL3) {
		server3_done = true;
	}

	if (server1_done && server2_done && server3_done) {
		console.log(string1.toString());
		console.log(string2.toString());
		console.log(string3.toString());
	}
}

urls.push(URL1);
urls.push(URL2);
urls.push(URL3);

urls.forEach(function(url) {
	var get = http.get(url, function(res) {
	
	res.setEncoding('utf8');

	res.on('error', function(res) {
		console.log('error!');
	});

	res.on('data', function(data) {
		collect_stats(url, data.toString());
	});	

	res.on('end', function() {
		end_stats(url);
	});

	}).on('error', function(res) {
		console.log('error!');
	});
})
