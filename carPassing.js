const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38
console.log(typeof cars)
let time = Date.now()
function carPassing(cars, speed) {
  let test = {
    time: time,
    speed: speed
  }
  cars.push(test);
  return cars
}
// console.log(cars)

//weird
carPassing(cars, speed)

