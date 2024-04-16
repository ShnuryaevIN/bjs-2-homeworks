﻿function parseCount(value) {
   let result = Number.parseFloat(value);
    if(isNaN(result)) {
        throw new Error("Невалидное значение")
    } 
    return result;
}

function validateCount(item) {
    try {
   return parseCount(item);
    } catch(err) {
        return err;
    }
}





class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if(this.sideA + this.sideB < this.sideC || this.sideB + this.sideC < this.sideA || this.sideC + this.sideA < this.sideB) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
   
    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        let semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
        let S = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));
        return +S.toFixed(3);
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            area: 'Ошибка! Треугольник не существует',
            perimeter: 'Ошибка! Треугольник не существует',
        };
    }
}