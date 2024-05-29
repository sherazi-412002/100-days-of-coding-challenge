import { describe } from "node:test";

let laptop = {
    make: "Lenovo",
    model: "82TS",
    year: "2023",
    describe: function(){
        console.log(`This laptop is a "${this.year} ${this.model} ${this.make}"`);
    }
};

laptop.describe()

//second example


// let student = {
//     id:123,
//     name:"shoaib",
//     age:21,
//     describe: function(){
//         console.log(`Hi ${this.name}`)
//     }
// }

// student.describe()