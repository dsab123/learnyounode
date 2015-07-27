sum = 0

process.argv.forEach(function(val, index, array) {
	if (Number.isInteger(Number(val))) {
		sum = sum + Number(val);
	}
});

console.log(sum);
