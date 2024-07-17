// Get the modal element
var modalShip = document.getElementById("shipheroModal");

// Get the div that opens the modal
var divShip = document.getElementById("openShipheroModal");

// Get the <span> element that closes the modal
var spanShip = document.getElementById("closeShipheroModal");

// When the user clicks the div, open the modal 
divShip.onclick = function() {
  modalShip.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanShip.onclick = function() {
  modalShip.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalShip) {
    modalShip.style.display = "none";
  }
}

