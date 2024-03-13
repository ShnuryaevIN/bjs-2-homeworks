"use strict"

let getArrayParams = (...nums) => {
	let min = Math.min(...nums);
	let max = Math.max(...nums);
	let sum = 0;
	let avg;

	for (let elem of nums) {
		if (elem > max) {
			max = elem;
		} else if (elem < min) {
			min = elem;
		}
		sum += elem / nums.length;
		avg = +sum.toFixed(2);
	}
	return {
		min,
		max,
		avg,
	};
}

console.log(getArrayParams(5));
console.log(getArrayParams(-90, 90, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
