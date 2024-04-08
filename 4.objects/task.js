"use strict"

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    }
``

Student.prototype.setSubject = function (subjectName) {
       return this.setSubject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if(Student === "undefined") {
      this.marks = false;
    } else {
      this.addMarks = this.marks.push(...marksToAdd);
    }
  
}
Student.prototype.getAverage = function () {
    const summ = this.marks.reduce((summ, marks) => summ + marks, 0);
    const length = this.marks.length;
    return summ / length;
}

Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  if(this.exclude === true) {
    delete Student.this.setSubject;
    delete Student.this.marks;
  }
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.addMarks(4, 5, 6, 7);
console.log(student2.getAverage()); // 4.5
student2.exclude('плохая учёба')
console.log(student2)