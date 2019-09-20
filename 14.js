const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
r1.on('line',(input)=>{
	let str = input.split(" ");
	let min = parseInt(str[0]);
	let max = parseInt(str[0]);
	for (let i=0; i<str.length;i++){
		//console.log(`actual ${str[i]}`);
		if(parseInt(str[i])<min){
			//console.log(`min ${min}, actual ${str[i]}`);
			min = parseInt(str[i]);
		} if(parseInt(str[i])>max){
			//console.log(`max ${max}, actual ${str[i]}`);
			max = parseInt(str[i]);
		}
	}
	console.log(`El menor es ${min} y el mayor es ${max}`);
});
