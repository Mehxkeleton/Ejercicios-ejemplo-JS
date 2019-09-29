//Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su multiplicación o su división.

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
	'Numero 1 ',
	'Numero 2 ',
	'1- Suma\n2- Resta\n3- Multiplicacion\n4- Division '
	])
	.then(answers=>{
		let out;
		switch(parseInt(answers[2])){
			case 1:
			out = parseFloat(answers[0])+parseFloat(answers[1]);
			break;
			case 2:
			out = parseFloat(answers[0])-parseFloat(answers[1]);
			break;
			case 3:
			out = parseFloat(answers[0])*parseFloat(answers[1]);
			break;
			case 4:
			out = parseFloat(answers[0])/parseFloat(answers[1]);
			break;			
		}
		console.log(out);

	});
