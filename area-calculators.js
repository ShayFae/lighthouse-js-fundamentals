//Needed anything that equals to zero or under to return undefined and also PI as well so I used else-if loops

function calculateRectangleArea(length, width) {
  let a = length *= width;
  if(a <= 0) {
    return undefined;
  } else 
  return a;
};

function calculateTriangleArea(base, height) {
  let x = base * height / 2;
  if(x <= 0) {
    return undefined;
  } else
   return x;
};

//Math.PI gives me PI and I had to times it by whatever the user wants to the power of two using Math.pow
function calculateCircleArea(radius) {
  let p = Math.PI * Math.pow(radius, 2);
  if(p <= 0) {
    return undefined; 
  } else if(p === Math.PI) {
    return undefined
  } else
  return p;
};

console.log(calculateRectangleArea(-1, 0));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(-1, 0)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(-1)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined