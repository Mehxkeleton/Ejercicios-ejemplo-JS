//Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
//introduciremos por teclado.
const fs = require('fs') 

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
	'ID a buscar '
	])
	.then(answers=>{
		let regex = new RegExp(answers[0]+",.*,.*,.*,.*\n");
		let current="ID NOMBRE APELLIDOS DIRECCIÓN ESTADO\n";
		fs.readFile('DATOS.DAT', (err, data) => { 
			if (err) {
				console.log("Archivo no existente, abriendo nuevo archivo");
			} else { 
				current = data;
				//console.log("A");
				console.log("Datos actuales");
				console.log(data.toString());
			} 
			current=current+'';
			let temp=current.match(regex);
			console.log("\n\nRegistros encontrados: ");
			console.log("ID NOMBRE APELLIDOS DIRECCIÓN ESTADO");
			console.log(temp.toString());
			
		});
		
	});
