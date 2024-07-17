// Get the modal element
var modalFort = document.getElementById("fortaModal");

// Get the div that opens the modal
var divFort = document.getElementById("openFortaModal");

// Get the <span> element that closes the modal
var spanFort = document.getElementById("closeFortaModal");

// When the user clicks the div, open the modal 
divFort.onclick = function() {
  modalFort.style.display = "block";
function redirectToPage(url) {
    window.location.href = url;
}

// When the user clicks on <span> (x), close the modal
spanFort.onclick = function() {
  modalFort.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFort) {
    modalFort.style.display = "none";
  }
}