let mixedData = [true, 5, "shoaib", 56, false, "ali", 64, ];

let onlyString = mixedData.filter((items)=> typeof items === "string");

console.log(onlyString);

let onlyNumbers = mixedData.filter((items)=> typeof items === "number")
//what the reason it doesnot work
// let sumOfNumbers = onlyNumbers.reduce((total,present)=>total + present , 0);
// console.log(sumOfNumbers)

console.log(onlyNumbers);


let onlyBoleans = mixedData.filter((items)=> typeof items === "boolean");

console.log(onlyBoleans);
