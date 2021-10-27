//Other ways didn't workout so I had to set an x and y variable to 0 and the grab the different indexs from the moves array and increment it to the length of the array
//the I use the moves(element)[i(index)] to check if it's equal to whatever string if so I increment up or down depending on the direction and set it to that axis
//once it goes through the loop it then returns an array that contains the total of x and y
const moves = ['south','south','south','south','south','north','south'];
let x = 0
let y = 0

function finalPosition(moves) {
  for(let i = 0; i < moves.length; i++) {
  console.log(moves[i])
    if(moves[i] === 'north') {
      y++
    } else if(moves[i] === 'west') {
      x--
    } else if(moves[i] === 'east') {
      x++
    } else if(moves[i] === 'south') {
      y--
    }
 }
 return [x, y];
}
// finalPosition(moves);
console.log(finalPosition(moves))



// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// function finalPosition(moves) {
//   console.log(moves[0])
//   console.log(moves[1])
//   console.log(moves[3])
//   // if(moves === 'north') {
//   //   return 1
//   // }
//   moves[0] = 1;
//   moves[1] = 1;
//   moves[2] = -1;
//   moves[3] = -1;
//   moves[4] = 1;
//   moves[5] = -1;
//   moves[6] = 1;
//   const x = moves[0] + moves[1] + moves[4] + moves[6];
//   const y = moves[2] - moves[3] - moves[5];
 
//  moves.push(x, y);
//  return x && y;
//   // if(moves === 'north' || 'south') {
//   //   return north + south
//   // }
// }
// finalPosition(moves);
// console.log(finalPosition(moves))

// function finalPosition(moves) {
//   let x = 0;
//   let y = 0;
//   for(let x = 0; x < moves.length; x++) {
//     return console.log(x);
//   }
//   for(let y = 0; y < moves.length; y++) {
//     return console.log(y);
//   }
// };

