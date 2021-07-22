// Dado un array de numeros [1,2,3,4,5], se pide una funcion que me devuelva el doble de cada una de los valores.
// Input [1,2,3,4,5]  Output [2,4,6,8,10]
const duplicateValues = function (inputArray) {
	const result = inputArray.map(x => x * 2) //Por cada elemento del array lo multiplico por dos y lo guardo en una variable
	   console.log(result)
}

duplicateValues([1, 2, 3, 4, 5]);

// Filtrar un array de Personas, para que me devuelvan las personas mayores a 18 anios y que sean frontends.
// Input [{ name: 'Adrian Zelada', age: 25, skills: 'Frontend'}, { name: 'Maria Luisa', age: 33, skills: 'Backend'}, { name: 'Elon Musk', age: 20, skills: 'Software Architect'}]

// Output [{ name: 'Adrian Zelada', age:25, skills: 'Frontend'}];
const filterPeople = function (inputPeople) {
	const filtro = inputPeople.filter(p => p.skills == "Frontend" && p.age > 18)
	  console.log(filtro)
}

filterPeople([{ name: 'Adrian Zelada', age: 25, skills: 'Frontend' }, { name: 'Maria Luisa', age: 33, skills: 'Backend' }, { name: 'Elon Musk', age: 20, skills: 'Software Architect' }]);

// Given an integer x, return true if x is palindrome integer.
// Dado una palabra x, retornar la palabra invertida y determinar si es un palíndromo.
// 
// ejemplo 1.
// Input x = pizarra
// Output: palabra invertida : arrazip, es palindromo? : false;

// ejemplo 2.
// Input x = reconocer
// Output: palabra invertida : reconocer, es palindromo? : true;

var isPalindrome = function (x) {
	const Reverse = x.split("").reverse().join("") //separar la palabra, invertir y unir
	if (x == Reverse) {
		console.log(true)
	} else {
		console.log(false)
	}
};

// isPalindrome('pizarra');

// Dado un array de numero enteros, contar cuantas veces se repite un numero 
// Ejemplo 
// input arrayNumber = [1, 2, 8, 2, 9, 10, 5, 8, 1, 2];
// Output: el numero 1 se repite 2 veces, el numero 2 se repite 3 veces, el numero 8 se repite 2 veces, 
// el numero 9 se repite 1 ves, el numero 10 se repite 1 ves.

var countNumbers = function (x) {
	let result = {}
	x.forEach(element => {
		console.log(result, result[element])
		if (result[element]) {
			result[element] = result[element] + 1
		}
		else { result[element] = 1 }
	});
	console.log(result)
}

countNumbers([1, 2, 8, 2, 9, 10, 5, 8, 1, 2]);





