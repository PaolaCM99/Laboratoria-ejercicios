
//SUMA DE LA POBLACION POR CADA REGION DEL MUNDO

fetch('https://restcountries.eu/rest/v2/all')
	.then(response => response.json())
	.then((data) => {

		let continente = data.reduce((acc, value) => {
			if (acc[value.region]) {
				acc[value.region] = acc[value.region] + value.population
			}
			else {
				acc[value.region] = value.population
			}
			return acc
		}, {})

		// console.log(continente)


		//Comprobacion de la suma de poblacion total en oceania
		let filtro = data.filter((d) => d.region === "Oceania")
		let suma = filtro.reduce((acc, val) => acc + val.population, 0)
		// console.log(suma)
	})


//PAISES QUE HABLAN EL MISMO IDIOMA

fetch('https://restcountries.eu/rest/v2/all')
	.then(response => response.json())
	.then((data) => {
		
		let idioma = data.reduce((acc, array) => {
			
			if (acc[array.languages.length]) {
				// console.log(array.name + " "+array.languages[length].name) //Pais + idioma
				
				if(acc[array.languages.length].name == array.languages[length].name){
					acc[array.name]= array.languages[length].name	
				}
			}
			else {
				acc[array.languages.length]= array;
				// acc[array.name] = acc[array.name]
				// array.languages[length].name
				// console.log( acc[array.name])
			}
			return acc
		}, {})
		console.log(idioma)
	})




	// fetch('https://restcountries.eu/rest/v2/all')
// 	.then(response => response.json())
// 	.then((data) => {

// 		let idiomas = data.map((value) => {
// 			value.languages.forEach(element => console.log(element.name));
// 			return value.languages
// 		})

// 	})
