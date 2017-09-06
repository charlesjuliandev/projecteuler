// Project Euler Problem #4 answer 906609
function palindrome(high, low){
	/* 
		A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
		Find the largest palindrome made from the product of two 3-digit numbers. 
	*/
	// count numbers from 100 to 999
	var highest_number = 0;
	var palidromic_array = []
	// get set of numbers, iterate and multiply each
	for (var i = high; i >= low; i--) {
		for (var j = high; j >= low; j--) {

			var numbers = i * j;

			if (numbers <= highest_number) {
				return false;
			}

			// convert numbers to string for comparison
			var number_strings = numbers.toString()

			// reverse numbers
			var reversed_number_strings = number_strings.split('').reverse().join('');

			// check if numbers are identical
			if (number_strings === reversed_number_strings) {
				// get all palidromic numbers in number range and convert back to integer
				reversed_number_strings = parseInt(reversed_number_strings);
				// push numbers in array to find largest palidromic number
				palidromic_array.push(reversed_number_strings)
			} 

		}
	}
	// find largest number in array
	function findMaxNumber(array){
		return Math.max.apply(Math, array)
	}

	// set highest number to largest palindromic number using findMaxNumber function

	highest_number = findMaxNumber(palidromic_array);

	return highest_number
}

document.getElementById('answer').innerHTML = palindrome(999, 100);
console.log("test");

