function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addNumber = makeAdder(9);
console.log(addNumber(6));
export {};
