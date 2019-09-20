const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let total = 0;
r1.on('line', (input)=>{
	total++;
	console.log(`Repite: ${input}`);
	console.log("total de frases "+total);

});
