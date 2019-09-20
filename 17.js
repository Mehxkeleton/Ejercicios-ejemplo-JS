const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.on('line', (input)=>{
	let str = input.split(" ");
	let min = parseInt(str[0]);
	let max = parseInt(str[0]);
	let total = 0;
	let sum = 0;
	for (let i=0; i<str.length; i++){
		if(parseInt(str[i]) < min){
			min = parseInt(str[0]);
		}else if(parseInt(str[i]) > max){
			max = parseInt(str[i]);
		}
	}
	for (let i=min; i<=max;i++){
		if(i%2==0){
			console.log(i);
			total++;
			sum+=i;
		}
	}
console.log(`Entre ${min} y ${max} hay ${total} multiplos de 2 y la suma de ellos es ${sum}`);
});
