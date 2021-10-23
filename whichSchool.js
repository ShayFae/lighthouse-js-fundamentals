const whichSchool = function(age) {
  if(age < 13) {
    console.log("Elementary School");
  } else if(age >= 13 && age <= 18) {
    console.log("Secondary School");
  } else if (age > 18) {
    console.log("Lighthouse Labs");
  }
};

whichSchool(13);

//Weird, try something else
// const whichSchool = function (age) {
//   for (i = 13; i < 18; i++) {
//     (whichSchool(i)).to.be.equal("Secondary School");
//   }
// };

// console.log(whichSchool(0));