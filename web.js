
const toggleButton = document.getElementById('toggle-button');
const toggleElements = document.querySelectorAll('.toggle-element');

toggleButton.addEventListener('click', function() {
  toggleElements.forEach(element => {
    element.classList.toggle('hidden');
  });
});



