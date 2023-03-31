window.addEventListener('load', function() {
  // your code here


  // Get current day and time
  var now = new Date();
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minute = now.getMinutes();
  
  // Check if current time is within range and apply green background color to specific cell
  if (dayOfWeek === 1 && hour === 8 && minute >= 0 && minute < 60) {
    document.getElementById("mon-8am").style.backgroundColor = "green";
  }
  if (dayOfWeek === 2 && hour === 8 && minute >= 0 && minute < 60) {
    document.getElementById("tue-8am").style.backgroundColor = "green";
  }
  if (dayOfWeek === 3 && hour === 8 && minute >= 0 && minute < 60) {
    document.getElementById("wed-8am").style.backgroundColor = "green";
  }
  if (dayOfWeek === 5 && hour === 22 && minute >= 0 && minute < 60) {
    document.getElementById("fri-8am").style.backgroundColor = "green";
  }


  // Get references to the form fields
  const nameField = document.getElementById('name');
  const courseField = document.getElementById('course');
  const admissionField = document.getElementById('admission');

  // Set the values of the fields
  nameField.value = 'IT STUDENT';
  courseField.value = 'Bachelor in informationtechnology';
  admissionField.value = 'Bit/0000/2021';
  
  
  
  
 
  
  // Add event listener to button
  var attendanceBtn = document.getElementById("attendance-btn");
  attendanceBtn.addEventListener("click", function() {
    alert("Attendance signed!");
  });




});
