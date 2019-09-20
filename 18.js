const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log("introducir (linea), (caracter a contar)");
r1.on('line', (input)=>{
	let str = input.split(", ");
	let total = 0;
	for (let i=0; i<str[0].length; i++){
		if(str[0][i] == str[1][0]){
			total++;
		}
	}
	console.log(`El caracter ${str[1]} se repite ${total} veces en la frase ${str[0]}`);
});
