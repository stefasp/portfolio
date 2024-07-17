// Get the modal element
var modalTim = document.getElementById("timeularModal");

// Get the div that opens the modal
var divTim = document.getElementById("openTimeularModal");

// Get the <span> element that closes the modal
var spanTim = document.getElementById("closeTimeularModal");

// When the user clicks the div, open the modal 
divTim.onclick = function() {
  modalTim.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTim.onclick = function() {
  modalTim.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTim) {
    modalTim.style.display = "none";
  }
}
