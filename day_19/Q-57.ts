

let grades = [68, 54, 89, 94, 75];

let averageGrade = grades.reduce((total, itemsValue) => total + itemsValue , 0 )/ grades.length;

console.log("AverageGrade = ", averageGrade);



// Also find percentage 
let percentageOfGrades = grades.reduce((total, itemsValue) => total + itemsValue , 0 )/500 * ( 100 );

console.log("Pecentage = ", percentageOfGrades , "%")