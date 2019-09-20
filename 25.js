const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.on('line',(input)=>{
	let int = parseInt(input);
	let rNums = ["V'", "M", "D", "C", "L", "X", "V", "I"];
	let rVal = [5000,1000,500,100,50,10,5,1];
	let coef = [0,0,0,0,0,0,0,0];
	let output = "";
	for (let i=0;i<rVal.length;i++){
		//console.log("A");
		coef[i] = Math.floor(int/rVal[i]);
		int = int%rVal[i];
		//console.log("B "+coef+" i "+i);
		if(coef[i]==4&&i>0){
			//console.log("C "+i);
			output=output+(rNums[i-1]+(Array(coef[i]).join(rNums[i])));
		}else if(coef[i]>0){
			//console.log("D "+i);
			output=output+(Array(coef[i]+1).join(rNums[i]));
		}
	}
	console.log(output);
});
