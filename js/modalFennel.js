// Get the modal element
var modalFenn = document.getElementById("fennelModal");

// Get the div that opens the modal
var divFenn = document.getElementById("openFennelModal");

// Get the <span> element that closes the modal
var spanFenn = document.getElementById("closeFennelModal");

// When the user clicks the div, open the modal 
divFenn.onclick = function() {
  modalFenn.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFenn.onclick = function() {
  modalFenn.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFenn) {
    modalFenn.style.display = "none";
  }
}

