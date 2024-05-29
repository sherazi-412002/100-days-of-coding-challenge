
function remainderAndQuotient(dividend:number , divisor:number):{quotient:number , remainder:number}{
    let quotient = Math.floor(dividend / divisor)
    let remainder = dividend % divisor

    return {"quotient": quotient , "remainder" :remainder}
}

console.log(remainderAndQuotient(18, 7))