const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const goodStations = [];
  for(const station of stations) {
    const cap = station[1];
    if(cap >= 20) {
    // console.log(station[0]);
      if(station[2] === "school" || "community center") {
        // console.log(station[2])
        // console.log(station[0] + ", " + station[2]);
        goodStations.push(station[0]);
    }
  } 
 }
 return goodStations;
}
chooseStations(stations);
console.log(chooseStations(stations));

//work in progress first idea, try to see if there's other ways as well
// function chooseStations(stations) {
//   for(const station of stations) {
//     const cap = station[1];
//     if(cap >= 20) {
//     // console.log(station[0]);
//     // const place = station[2];
//       if(station[2] === "school" || "community center") {
//         // console.log(station[2])
//         // console.log(station[0] + ", " + station[2]);
//         return station[0] + ", " + station[2];
//       }
//     }
//   } 
// }; 

// chooseStations(stations);
// console.log(chooseStations(stations))