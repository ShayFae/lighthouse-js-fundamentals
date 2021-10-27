function range (start, end, step) {
  const ranged = [];
  if(start === undefined || end === undefined || step === undefined || end < start || step < 0) {
    return ranged;
  } else {
    for(let i = start; i <= end; i += step){
      ranged.push(i)
    }
  }
  return ranged;
}


console.log(range(0, 8, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-9, 3, 3));
// // ([-9, -6, -3, 0, 3]);
console.log(range());
// // ([]);
console.log(range());
console.log(range(0,10,-5))


//Original but it didn't account for a negative step value causing it to crash
// function range(start, end, step) {
//   const ranged = [];
//     for(let i = start; i <= end; i += step) {
//        ranged.push(i)
//     } if(start === undefined || end === undefined || step === undefined) {
//           return ranged;
//       } else if(end < start || step < 0 || step === 0) {
//             return ranged;
//            } 
//            return ranged;
//           };
