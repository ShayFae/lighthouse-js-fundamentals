const sumLargestNumbers = function(data) {
  const max = Math.max.apply(null, data);
  const max2 = data.filter(m => m != max);
  const test = Math.max.apply(null, max2);
  return max + test;
  };

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))

