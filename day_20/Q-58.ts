
function averageScore(...scores:number[]){
    return scores.reduce((sum,given)=>sum + given / scores.length,0)
}

console.log(averageScore(45,60,85,89,86,94,95).toFixed(2));