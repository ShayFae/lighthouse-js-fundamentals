function howManyHundreds(x) {
    x = x / 100;
    if(x % x < 0) {
        return 0;
    } else
    // console.log(typeof x);
    return Math.trunc(x);
    // x.toFixed(); 
    
}; 
console.log(typeof x);
console.log(howManyHundreds(0));
console.log(howManyHundreds(55));
console.log(howManyHundreds(12));
console.log(howManyHundreds(200));
console.log(howManyHundreds(1234));
