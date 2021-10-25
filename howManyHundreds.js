function howManyHundreds(x) {
    x = x / 100;
    return x.toFixed();
    //  let y = x;
    //  let round = Math.round(y);
    //  console.log(round);
    //  return round;
     
    
}; 

console.log(howManyHundreds(55));
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(99), "=?", 0);