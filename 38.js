//Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método
//SHELL (por inserción).

function BuildArray(M,N){
	let array = new Array(M);
	console.log("Matriz Normal");
	for (let i = 0; i<M; i++){
		array[i]=new Array(N);
		for (let j=0; j<N; j++){
			array[i][j]=Math.floor(Math.random()*100)+1;
			//console.log("I: "+i+" j: "+j)
		} 
	}
	return array;
}

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment][0] > temp[0]) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

let ejem = shellSort(BuildArray(6,2));
for (let i=0;i<ejem.length;i++){
	console.log(ejem[i].toString());
}
