//Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
//en y calcule e imprima su media.
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

Ask([
	'Calificacion 1 ',
	'Calificacion 2 ',
	'Calificacion 3 ',
	'Calificacion 4 ',
	'Calificacion 5 ',
	'Calificacion 6 ',
	'Calificacion 7 ',
	'Calificacion 8 ',
	'Calificacion 9 ',
	'Calificacion 10 '
	])
	.then(answers=>{
		let out=0;
		let i;
		
		for(i=0;i<answers.length;i++){
			out+=parseFloat(answers[i]);
		}
		out= out/(i+1);
		
		console.log(out);

	});
