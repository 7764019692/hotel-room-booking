function renderHotel() {
  let container = document.getElementById("hotel");
  container.innerHTML = "";

  hotel.forEach((floor, i) => {
    let row = document.createElement("div");
    row.className = "floor";

    floor.forEach(room => {
      let box = document.createElement("div");
      box.className = room.booked ? "room booked" : "room";
      box.innerText = room.number;
      row.appendChild(box);
    });

    container.appendChild(row);
  });
}

renderHotel();
