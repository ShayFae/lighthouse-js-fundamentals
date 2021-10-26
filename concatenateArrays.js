function concat(one, two) {
  const three = one.concat(two);
  return three;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([5,2],[4,9,1]))
console.log(concat([1,2,3],[]));
