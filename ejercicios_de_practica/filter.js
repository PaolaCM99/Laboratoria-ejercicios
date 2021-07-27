let lista = [1, 2, 3, 4];
let filtrado = lista.filter((n) => n > 2)
// console.log(filtrado)

function fiveAndGreaterOnly(arr) {
	return arr.filter((n) =>  n % 2 == 0 )
	
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

function ofAge(arr) {
	return arr.filter((person) => 
	 person.age >= 18
	)
}

console.log(ofAge([
	{ name: "Angelina Jolie", age: 80 },
	{ name: "Eric Jones", age: 2 },
	{ name: "Paris Hilton", age: 5 },
	{ name: "Kayne West", age: 16 },
	{ name: "Bob Ziroll", age: 100 }
]));

function fiveCharactersOrFewerOnly(arr) {
	return arr.filter((letras)=> letras.length<5)
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  