//Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su
//matriz transpuesta.
function transposeArray(array, arrayLength){
    var newArray = new Array(arrayLength);
    for (let i=0;i<arrayLength;i++){
		newArray[i]=new Array(array.length);
		for(let j=0;j<array.length;j++){
			newArray[i][j]=array[j][i];
		}
	}

    return newArray;
}

let row = new Array(4);
console.log("Matriz Normal");
for (let i = 0; i<4; i++){
	row[i]=new Array(5);
	for (let j=0; j<5; j++){
		row[i][j]=Math.floor(Math.random()*100)+1;
		//console.log("I: "+i+" j: "+j)
	}
	console.log(row[i].toString());
}

console.log("Matriz Transpuesta");
let rowT = transposeArray(row,row[0].length);

for(let i=0; i<rowT.length;i++){
	console.log(rowT[i].toString());
}
