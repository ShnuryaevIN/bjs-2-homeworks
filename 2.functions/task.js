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
	let summ = 0;

	for (let elem of arr) {
			summ += elem;
		} 
	return summ;
}

function differenceMaxMinWorker(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
  
	if( !Array.isArray(arr) || !arr.length) {
	  return 0;
	} else {
	  return max - min;
	}
  }

  function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let elem of arr) {
		if (elem % 2 == 0) {
			sumEvenElement += elem;
		} else if (elem % 2 != 0) {
			sumOddElement += elem;
		}
	}
	if (!Array.isArray(arr) || !arr.length) {
		return 0;
	} else {
		return sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let elem of arr) {
		if (elem % 2 == 0) {
			sumEvenElement += elem;
			countEvenElement++;
		}
	}

	if  ( !Array.isArray(arr) || !arr.length) {
		return 0;
	} else {
		return sumEvenElement / countEvenElement;
	}
}
  

console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10));

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

function makeWork (arrOfArr, func) {

}
