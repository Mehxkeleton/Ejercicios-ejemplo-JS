//Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el
//segundo 2, el tercero 3 y así sucesivamente.

let tabla= new Array(3);
let count = 0
for(let i=0;i<3;i++){
	tabla[i]=new Array(4);
	console.log("Pagina "+(i+1));
	for(let j=0;j<4;j++){
		tabla[i][j]=new Array(5);
		for(let k=0;k<5;k++){
			count++;
			tabla[i][j][k]=count;
		}
		console.log(tabla[i][j].toString());
	}
}

		
