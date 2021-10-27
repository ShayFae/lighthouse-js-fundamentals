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
      const type = station[2];
      if(type === "community centre" || type === "school") {
        goodStations.push(station[0]);
      }
    } 
  }
  return goodStations
}