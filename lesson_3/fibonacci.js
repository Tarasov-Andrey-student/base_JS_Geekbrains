'use strict';

function fibonacci(n, prev1, prev2){
	var current = prev1 + prev2;
	var fibonacci_string = current + " ";
	if(n > 1)
		fibonacci_string += fibonacci(n - 1, current, prev1);
       return fibonacci_string;
}
console.log(fibonacci(7, 1, 0));