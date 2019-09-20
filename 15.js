r1.on('line', (input)=>{
	let str = input.split(" ");
	let min = parseInt(str[0]);
	let max = parseInt(str[0]);
	let total = 0;
	let total2 = 0;
	let sum = 0;
	for (let i=0; i<str.length; i++){
		if(parseInt(str[i]) < min){
			min = parseInt(str[0]);
		}else if(parseInt(str[i]) > max){
			max = parseInt(str[i]);
		}
	}
	for (let i=min; i<=max;i++){
		console.log(i);
		total=i;
		if(i%2==0){
			total2++;
		}else{
			sum+=i;
		}
	}
	console.log(`Entre ${min} y ${max} hay ${total} numeros naturales, ${total2} pares y la suma de los impares es ${sum}`);
});*
