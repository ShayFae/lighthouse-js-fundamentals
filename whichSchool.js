//The problem was that I was console.loging the strings when I should be returning it, the function had nothing to read since I didn't give it something to give back.(PAY ATTENTION)
const whichSchool = function(age) {
  if(age < 13) {
    return "Elementary School"
  } else if(age >= 13 && age <= 18) {
    return "Secondary School";
  } else if (age > 18) {
    return "Lighthouse Labs";
  }
};
