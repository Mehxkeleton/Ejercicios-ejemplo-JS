//Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.
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
	'ID a eliminar '
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
				console.log(data.toString());
			} 
			current=current+'';
			let temp=current.split(regex);
			//console.log(temp);
			current = temp[0]+temp[1];
			fs.writeFile('DATOS.DAT', current, (err) => { 
				// In case of a error throw err. 
				if (err) throw err; 
			});
			//console.log("B");
			console.log(current);
		});
		
	});
