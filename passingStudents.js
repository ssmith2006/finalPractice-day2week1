"use strict";

const students = [
  { name: "Ana", score: 90 },
  { name: "Luis", score: 65 },
  { name: "Emma", score: 85 },
];

function getPassingStudentNames(students){
   const passing= students.filter(student => student.score >= 70);
   const names = passing.map(student => `Congrats to ${student.name} for passing with a score of ${student.score}`);
   return names;  
}
console.log(getPassingStudentNames(students));

