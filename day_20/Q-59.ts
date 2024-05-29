

function makeAdder(valueToAdd:number):(number:number) => number{
    return function(number:number):number{
        return number + valueToAdd
    }

}

let addNumber = makeAdder(9);
console.log(addNumber(6));