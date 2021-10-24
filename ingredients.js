const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


console.log("This is a for loop: ")
for(let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
};

let i = 0;

console.log("This is a while loop: ")
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}; 

//Forgot to reverse it, fail
console.log("This is a for of loop in reverse: ")
for(const ingredient of ingredients.reverse()) {
  // ingredient = ingredients.reverse()
  console.log(ingredient)
};