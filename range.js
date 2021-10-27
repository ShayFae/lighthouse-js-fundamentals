// let ranged = [];

// function range(start, end, step) {
//   for(let i = start; i <= end; i += step) {
//      ranged.push(i)
//   }
//   if(end < start) {
//     return ranged = [];
//   } else if(step < 0 || step === 0) {
//     return [];
//   } else if(start === undefined || end === undefined || step === undefined) {
//     return ranged = [];
//   // } else if(start === 0) {
//   //   let result = ranged.filter(ranges => ranged.length >= 0);
//   //   console.log(ranged)
//   //   return ranged
//   } else 
//   return ranged;
// };
// let ranged = [];

// function range(start, end, step) {
//   for(let i = start; i <= end; i += step) {
//      ranged.push(i)
//   }
//   if(end < start || step < 0 || step === 0) {
//     return ranged;
//   } else if(start === undefined || end === undefined || step === undefined) {
//     return ranged = [];
//   } else if(start < 0) {
//     for(let n = start; n <= end; n += step) {
//       // start++ * step
//       return n
//     }
    
//   }
//   return ranged;
// };

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));


// console.log(range(-9, 3, 3));
// // ([-9, -6, -3, 0, 3]);
// console.log(range());
// // ([]);
// console.log(range(0, 8, 2));

// ([0, 2, 4, 6, 8]);

function range(start, end, step) {
  const ranged = [];
    for(let i = start; i <= end; i += step) {
       ranged.push(i)
    } if(start === undefined || end === undefined || step === undefined) {
          return ranged;
      } else if(end < start || step < 0 || step === 0) {
            // return ranged;
           } 
           return ranged;
          };

console.log(range(0, 8, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-9, 3, 3));
// // ([-9, -6, -3, 0, 3]);
console.log(range());
// // ([]);
// console.log(range(0, 8, 2));