//Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.
let total=0; 
for (let i=0; i<100; i++){
	let d1=(Math.floor(Math.random()*6)+1);
	let	d2=(Math.floor(Math.random()*6)+1);
	if((d1+d2)==10)
	total++;
}
console.log(total);
