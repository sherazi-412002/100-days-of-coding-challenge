

let priceSet1 = [12000, 15000, 20000];
let priceSet2 = [11000, 16000, 18000];

let combinedPrice =[...priceSet1 , ...priceSet2].sort((a,b)=>a-b)

console.log(combinedPrice)