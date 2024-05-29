"use strict";
function remainderAndQuotient(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { "quotient": quotient, "remainder": remainder };
}
console.log(remainderAndQuotient(18, 7));
