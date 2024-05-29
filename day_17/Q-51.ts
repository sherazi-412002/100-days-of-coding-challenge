//Original Function
function calculateAreaOfRectangle (width:number, length:number):number {
    return width * length
}

//Cakculate area with arrow function
let calculateAreaInArrow = (width:number,length:number):number=>width*length

console.log(calculateAreaInArrow(5,9))