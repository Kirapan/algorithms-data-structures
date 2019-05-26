// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let a = 0;
//     let b = 1;
//     let c;
//     if (n < 2) c = n;
//     for(let i = 2; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }

// function fib(n) {
// 	let result;
//   if(n < 2) {
// 		return n;
// 	}
// 	return fib(n-2) + fib(n-1);
	
// }

function memorize(fn) {
	const cache = {};
	return function(...args) {
		if(cache[args]) {
			return cache[args]
		}
		const result = fn.apply(this, args)
		cache[args] = result;
		return result;
	}
}

function slowFib(n) {
	let result;
  if(n < 2) {
		return n;
	}
	return fib(n-2) + fib(n-1);
}
const fib = memorize(slowFib);

module.exports = fib;
