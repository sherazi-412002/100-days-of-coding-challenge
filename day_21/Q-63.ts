//creat a custom type (type alias) for shapes that could be circle or rectangle

import { log } from "console";

type shapes = {
    kindOfShape: "circle" | "rectangle";
    radius?:number;
    width?:number;
    length?:number
}

// Describing a circle with shape type 
let circle:shapes = {
    kindOfShape:"circle",
    radius:5.6
}

// describing a rectangle with shape type
let rectangle:shapes = {
    kindOfShape:"rectangle",
    width:4,
    length:6
}

// showing what we describe
console.log(circle);
console.log(rectangle);
