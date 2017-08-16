// Project Euler Problem #1 answer 233168

var fizzBuzzSum = function(){
	var factors = [];
	for (var i = 1; i < 1000; i++) {

		if (i % 5 == 0 || i % 3 == 0) {
			factors.push(i);
		}
	}

	var final_number = 0;
	
	for (var i = 0; i < factors.length; i++) {
		final_number += factors[i]
	}
	
	document.getElementById('answer').innerHTML = final_number;

	console.log(final_number);
	console.log(factors);
}

fizzBuzzSum();

