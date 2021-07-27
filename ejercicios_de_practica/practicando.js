//----------- PRIMER EJERCICIO

const array = [1, 2, 8, 2, 9, 10, 5, 8, 1, 2]
const resta = array.reduce((a, b)=> a-b)
// console.log(resta); 

// ----------SEGUNDO EJERCICIO

const arraytriple = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const arraysencillo = arraytriple.reduce((agrupar, actual)=>{
	return agrupar =agrupar.concat(actual)
})
console.log(arraysencillo)

//--------TERCER EJERCICIO

let arrayobjetos = [
	{ numerito: 1 },
	{ numerito: 2 },
	{ numerito: 3 },
	{ numerito: 4 },
	{ numerito: 5 }
];

let sumaTotal = arrayobjetos.reduce((total, actual) => {
	return total + actual.numerito
}, 0)
console.log(sumaTotal); 
// CUARTO EJERCICIO


let frutas = ["plátano", "plátano",
	"fresa", "naranja", "uva", "uva",
	"fresa", "plátano"];

const conteo = frutas.reduce((fruta, cantidad) => {
	fruta[cantidad] = fruta[cantidad] + 1 || 0 + 1
	return fruta
}, {})
// console.log(conteo)

// QUINTO EJERCICIO

const maximo = array.reduce((acc, numero) => Math.max(acc, numero))
// console.log(maximo)







// 
// 
