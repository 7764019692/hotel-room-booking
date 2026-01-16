const hotel = [];

for (let floor = 1; floor <= 10; floor++) {
  let rooms = [];
  let roomCount = floor === 10 ? 7 : 10;

  for (let i = 1; i <= roomCount; i++) {
    rooms.push({
      number: floor * 100 + i,
      booked: false
    });
  }
  hotel.push(rooms);
}
