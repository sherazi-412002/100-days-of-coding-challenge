let myName :string = "\t\nSyed  Shoaib  Sherazi\t\n";
console.log(`Name with white space and line break : "${myName}"`);

console.log(`Name after stripping : ${myName.trim()}`)


// When we want to remove white spaces and tab from centre as well
// let myName1 :string = "\tSyed  \n\tShoaib  \tSherazi";
// console.log(`Name after stripping : ${myName.trim().replace(/\s+/g,' ')}`);