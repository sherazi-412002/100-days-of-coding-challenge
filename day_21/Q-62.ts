interface studentInfo{
    name:string;
    age:number;
    standard:number;
    classes:{
        class1:string;
        class2:string;
        class3:string;
        class4:string
    }
}
let studend1:studentInfo = {
    name:"Shoaib",
    age:21,
    standard:14,
    classes:{
        class1:"phisiology",
        class2:"entomology",
        class3:"evolution",
        class4:"oceanography"
    }
}
let studend2:studentInfo = {
    name:"Ali",
    standard:10,
    age:18,
    classes:{
        class1:"math",
        class2:"english",
        class3:"urdu",
        class4:"biology"
    }
}

console.log(studend1, "\n\n", studend2)