// let grades = [80, 77, 88, 95, 68];

let average = (grades) => grades.reduce((a, b) => a + b) / grades.length;
console.log(average([1,2,3,4,5]));