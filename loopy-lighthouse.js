//Needed to make x divisible 3 && 4 first because making divisible by 3 or 4 single would only return what ever was found first instead of looking at both. Top to bottom in this case it sees the 3/4 if not it checks 3 then 4.
let x = 100;
while(x <= 200) {
  if(x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if(x % 3 === 0) {
    console.log("Loopy");
  } else if(x % 4 === 0) {
    console.log("Lighthouse")
  } else 
    console.log(x);
  x++
}


