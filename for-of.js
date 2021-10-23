const amounts = [61.00, 52.25, 112.99, 5.00];

// let total = 0;

// for(let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }; 
// console.log('Order total is ', total); 

//For of is good for begining to end but not if you want to do other things with it like reverse etc for would be the perfered method.
//Instead if incrementing with let i value you can set a new varible to the length of amount then taking the total variable and adding the final value and returning it to the console
let total = 0;

for(let amount of amounts) {
  total += amount;
}; 
console.log('Order total is ', total);