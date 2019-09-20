const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question('Definir tiempo de inicio ', (answer)=>{
	let str = answer.split(":");
	let inTime = [parseInt(str[0]),parseInt(str[1]),parseInt(str[2])];
	setInterval(()=>{
		inTime[2]++;
		if(inTime[2]>60){
			inTime[1]++;
			inTime[2]=0;
		}
		if(inTime[1]>60){
			inTime[0]++;
			inTime[1]=0;
		}
		if(inTime[0]>24){
			inTime[0]=0;
		}
		console.log(inTime[0]+":"+inTime[1]+":"+inTime[2]);
	},1000);
	r1.close();
});
