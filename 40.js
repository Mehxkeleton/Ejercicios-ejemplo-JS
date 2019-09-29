//Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce
//meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el
//total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
//cada mes de todos los representantes. Imprimir toda la información.

let tabla= new Array(3);
let suma=0;
for(let i=0;i<3;i++){
	tabla[i]=new Array(12);
	console.log("Representante "+(i+1)+"\nProducto 1	Producto 2	Producto 3	Producto 4");
	for(let j=0;j<12;j++){
		tabla[i][j]=new Array(4);
		for(let k=0;k<4;k++){
			tabla[i][j][k]=Math.floor(Math.random()*100)+1;
			suma+=tabla[i][j][k];
		}
		console.log("Mes: "+(j+1)+": "+tabla[i][j].toString());
	}
}

console.log("\nSuma total de ventas: "+suma);
