let total = 0;
for (let i=1;i<=100;i++){
	if (i%2==0 || i%3==0){
		console.log(i);
		total++;
	}
};
console.log(`Hay ${total} numeros multiple de 2 o 3 entre 1 y 100`);
