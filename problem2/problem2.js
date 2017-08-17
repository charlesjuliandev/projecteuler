// Project Euler Problem #2 answer

var fibonacci = function(num){

	// create array to hold values
		var fibo_array = [];

	// get solution for each number
		var a = 1, b = 0, temp;
	
		  while (num >= 0){
		  	// loop eplanation in code for first 3 iterations
		    temp = a;
			// *1st run temp = 1
		    // *2nd run a now = 1 temp = 1
		    // *3rd run a now = 2 temp = 2
		    a = a + b;
		    // *1st run a = 1 + 0
		    // *2nd run a = 1 + 1 = 2
		    // *3rd run a = 2 + 1 = 3
		    b = temp;
		    // *1st run b = 1
		    // *2nd run b = 1
		    // *3rd run b = 2

		    // push sum of a into array
		    fibo_array.push(a);

			// increment down number
		    num--;
		  }
	 
	// iterate through each number, if that number is even, then add it together
	var final_number = 0;
	for (var i = 0; i < fibo_array.length; i++) {
		
		if (fibo_array[i] % 2 == 0) {
			console.log(fibo_array[i])
			final_number += fibo_array[i] 	
		}
		
	}

	return final_number	

}

document.getElementById('answer').innerHTML = fibonacci(32);

