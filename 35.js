//Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e
//imprimirla.
let row = new Array(4);
for (let i = 0; i<4; i++){
	row[i]=new Array(5);
	for (let j=0; j<5; j++){
		row[i][j]=Math.floor(Math.random()*100)+1;
		//console.log("I: "+i+" j: "+j)
	}
	console.log(row[i].toString());

}
