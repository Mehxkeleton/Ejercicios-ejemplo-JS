function factorial (int){
	let fact = 1
	for (let i=1;i<=int;i++){
		fact*=i;
	}
	return fact;
}
r1.on('line',(input)=>{
	let int = parseInt(input);
	console.log(factorial(int));
});
