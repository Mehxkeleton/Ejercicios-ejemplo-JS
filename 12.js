let sum1=0;
let sum2=0;
for (let i=1; i<=100;i++){
	console.log(i);
	if(i%2){
		sum1+=i;
	}else{
		sum2+=i;
	}
}
console.log(`suma de impares ${sum1}`);
console.log(`suma de pares ${sum2}`);
