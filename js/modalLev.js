// Get the modal element
var modalLev = document.getElementById("levModal");

// Get the div that opens the modal
var divLev = document.getElementById("openLevModal");

// Get the <span> element that closes the modal
var spanLev = document.getElementById("closeLevModal");

// When the user clicks the div, open the modal 
divLev.onclick = function() {
  modalLev.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanLev.onclick = function() {
  modalLev.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalLev) {
    modalLev.style.display = "none";
  }
}

