function bookRooms() {
  let count = Number(document.getElementById("roomCount").value);
  if (count < 1 || count > 5) return alert("Max 5 rooms allowed");

  for (let floor of hotel) {
    let available = floor.filter(r => !r.booked);
    if (available.length >= count) {
      for (let i = 0; i < count; i++) {
        available[i].booked = true;
      }
      renderHotel();
      return;
    }
  }

  alert("Rooms not available on same floor");
}
