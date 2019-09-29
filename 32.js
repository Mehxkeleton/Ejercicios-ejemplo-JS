//Crear un arreglo de 20 elementos con nombres de personas. Mostrar los elementos de la lista
//debiendo ir cada uno en una fila distinta.

let myArray = ["Olivia", "Oliver", "Amelia", "George", "Isla", "Harry", "Ava", "Noah", "Emily", "Jack", "Sophia", "Charlie", "Grace", "Leo", "Mia", "Jacob", "Poppy", "Freddie", "Ella", "Alfie"];

for (let i = 0; i < myArray.length; i++){
	console.log("%s%s", Array(i+1).join("	"), myArray[i]);
}
