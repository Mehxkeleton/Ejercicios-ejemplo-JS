const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
r1.on('line', (input)=>{
	if(input>0){
		console.log(`${input} es positivo`);
	} else if (input<0){
		console.log(`${input} es negativo`);
	} else {
		console.log(`${input} es 0`);
	}	
});
