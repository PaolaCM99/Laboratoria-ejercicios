function getSecondLargest(nums) {
	// Complete the function
	let organizando = nums.sort((a, b) => a - b);
	let nrep = new Set(organizando)
	const arr = [...nrep]
	return arr[arr.length - 2]
}

getSecondLargest([2, 3, 6, 6, 5])

function fiveAndGreaterOnly(arr) {
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (element % 2 === 0) {
			console.log(element)
		}
	}

}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]