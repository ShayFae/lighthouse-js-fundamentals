//In order to get the last of multiples of the same i value that will match with the element array index(x) I used the .lastOfIndex(method) 
function lastIndexOf(element, i) {

  for(let x = 0; x <= element.length; x++) {
  if(element[x] === i) {
    x = element.lastIndexOf(i)
    // console.log(x)
    // console.log(element)
    return x;
  } else if(element[x] === undefined) 
  return -1
  }
};

console.log(lastIndexOf([ 1, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([], 10))
console.log(lastIndexOf([5,5,5,5,0],5))
console.log(lastIndexOf([ 0, 0, 0, 5, 0 ], 5));

