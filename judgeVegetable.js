const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
let metric = 'redness';

// function judgeVegetable(vegetables, metric) {
//   let veg = vegetables[0];
//   for(let i = 0; i < vegetables.length; i++) {
//     let merge = vegetables[i];
//     if(merge[metric] > veg[metric]) {
//       veg = merge;
//     }
//     return veg.submitter;
//   }
// }
  
function judgeVegetable(vegetables, metric) {
  var m = vegetables[0];
  for (const vegetable of vegetables){
    if (vegetable[metric] > m[metric]) {
      m = vegetable;
    }
  }
  return m.submitter;
}
  

console.log(judgeVegetable(vegetables, metric))
