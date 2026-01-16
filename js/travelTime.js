function travelTime(roomA, roomB) {
  let floorA = Math.floor(roomA / 100);
  let floorB = Math.floor(roomB / 100);

  let horizontal = Math.abs((roomA % 100) - (roomB % 100));
  let vertical = Math.abs(floorA - floorB) * 2;

  return horizontal + vertical;
}
