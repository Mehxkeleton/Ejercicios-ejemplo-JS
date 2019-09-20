const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.on('line', (input)=>{
	for(let i=0;i<5;i++){
		console.log("%s%s", Array(i+1).join("	"), input);
	}
});
