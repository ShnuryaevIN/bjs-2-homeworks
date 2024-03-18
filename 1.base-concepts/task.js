"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - (4 * a * c);
	if (d === 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}

	return arr;
}

solveEquation(10, 5, 5);



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let credit = amount - contribution;
	let monthlyPayment =  credit * (P + (P / (((1 + P)**countMonths) - 1)));
	let Sum = countMonths * monthlyPayment;
  
	return + Sum.toFixed(2);
  }