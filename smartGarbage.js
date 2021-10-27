const trash = 'recycling'
const bins = {
  waste: 10,
  recycling: 10,
  compost: 10
};

function smartGarbage(trash, bins) {
  if (trash === "waste" || trash === "recycling" || trash === "compost"){
    bins[`${this.trash}`] ++;
  }
  return bins
};


// console.log(smartGarbage('recycling'))

