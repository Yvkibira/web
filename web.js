
const toggleButton = document.getElementById('toggle-button');
const toggleElements = document.querySelectorAll('.toggle-element');

toggleButton.addEventListener('click', function() {
  toggleElements.forEach(element => {
    element.classList.toggle('hidden');
  });
});



// Get references to the button and the div
// Get references to the button and the div
const myButton = document.getElementById('myButton');
const myDiv = document.getElementById('myDiv');

// Add a click event listener to the button
myButton.addEventListener('click', function() {
  // Toggle the visibility of the div
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
});
