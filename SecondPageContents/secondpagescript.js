// Get the elements
const openButton = document.getElementById("openButton");
const academicColumn = document.querySelector(".academic-column");
const otherColumn = document.querySelector(".other-column");
const sportColumn = document.querySelector(".sport-column");

// Add event listener to the back button
openButton.addEventListener("click", function() {
  window.location.href = "../index.html";
});

// Assign URL to academic column
academicColumn.addEventListener("click", function() {
  window.location.href = "../AccessoryPage/academic.html";
});

// Assign URL to other column
otherColumn.addEventListener("click", function() {
  window.location.href = "../AccessoryPage/other.html";
});

// Assign URL to sport column
sportColumn.addEventListener("click", function() {
  window.location.href = "../AccessoryPage/sport.html";
});
