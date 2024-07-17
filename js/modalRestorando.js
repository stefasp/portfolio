// Get the modal element
var modalRes = document.getElementById("restorandoModal");

// Get the div that opens the modal
var divRes = document.getElementById("openRestorandoModal");

// Get the <span> element that closes the modal
var spanRes = document.getElementById("closeRestorandoModal");

// When the user clicks the div, open the modal 
divRes.onclick = function() {
  modalRes.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanRes.onclick = function() {
  modalRes.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalRes) {
    modalRes.style.display = "none";
  }
}
