const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
r1.on('line', (input)=>{
	if(input%2){
		console.log(`${input} es impar`);
	} else{
		console.log(`${input} es par`);
	}	
});
