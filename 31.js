//Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
//las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
//multiplicar.

const readline = require('readline');
const AskQuestion = (rl, question) => {
    return new Promise(resolve => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const Ask = function(questions) {
    return new Promise(async resolve => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let results = [];
        for(let i=0;i < questions.length;i++) {
            const result = await AskQuestion(rl, questions[i]);
            results.push(result);
        }
        rl.close();
        resolve(results);
    })
}

const Fact = function (numero){
	let out = 1;
	for (let i = 1 ; i<=numero; i++){
		out*=i;
	}
	return out;
}

const CalcPrimo = function(numero){
	let primo = true;
	for (let i = 0 ; i < numero; i++){
		if (numero%i==0){
			primo = false;
		}
	}
	return primo;
}

const TablaMult = function(numero){
	for(let i=0;i<=numero;i++){
		console.log(numero*i);
	}
}
Ask([
	'Numero ',
	'1- Calcular si es Primo\n2- Hallar Factorial\n3- Imprimir Tabla de multiplicar'
	])
	.then(answers=>{
		let out;
		switch(parseInt(answers[1])){
			case 1:
			out = CalcPrimo(answers[0]);
			break;
			case 2:
			out = Fact(answers[0]);
			break;
			case 3:
			TablaMult(answers[0]);
			break;
		}
		console.log(out);

	});
