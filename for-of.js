const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;
//For of is good for begining to end but not if you want to do other things with it like reverse etc for would be the perfered method.
//Instead of incrementing with let i value you can set a new varible to the length of amounts then taking the total variable and adding the final value and returning it to the console
for(let amount of amounts) {
  total += amount;
}; 

console.log('Order total is ', total);