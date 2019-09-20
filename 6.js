const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
r1.question('Defininir cota superior  ',(answer)=>{
	let sum2 = 0
	for (let i = 1; i<=answer; i++){
		sum2++;
	}
	console.log(`Total de naturales: ${sum2}`);
	r1.close();
});
