"use strict";
//creat a custom type (type alias) for shapes that could be circle or rectangle
Object.defineProperty(exports, "__esModule", { value: true });
// Describing a circle with shape type 
let circle = {
    kind: "circle",
    radius: 5.6
};
// describing a rectangle with shape type
let rectangle = {
    kind: "rectangle",
    width: 4,
    length: 6
};
// showing what we describe
console.log(circle);
console.log(rectangle);
