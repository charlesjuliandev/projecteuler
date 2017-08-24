// Project Euler Problem #3 answer
function largestPrimeFactor(number){

	var prime_factors = [];

	for (var i = 2; i <= number/i; i++) {
		if (number % i === 0) {
			number = number/i;
			prime_factors.push(i);
		}
	}
	
	// last factor
	if (number > 1) {
		prime_factors.push(number)
	}
	return prime_factors
}

document.getElementById('answer').innerHTML = largestPrimeFactor(600851475143);

