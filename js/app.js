function randomOccupancy() {
  hotel.flat().forEach(room => {
    room.booked = Math.random() < 0.3;
  });
  renderHotel();
}

function resetBooking() {
  hotel.flat().forEach(room => room.booked = false);
  renderHotel();
}
