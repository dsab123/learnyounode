var net = require('net');
var strftime = require('strftime');

var socket = new net.Socket();
var port = process.argv[2];

var server = net.createServer(function(cl) {
	// write 
	cl.write(strftime('%F %k:%M'));
	cl.write("\n");
	cl.end(); 
});

server.listen(port);
