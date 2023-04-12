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
  if (dayOfWeek === 6) /*  && hour === 22 && minute >= 0 && minute < 60) */ {
    document.getElementById("fri-8am").style.backgroundColor = "green";
  }
if (dayOfWeek === 1 && hour >= 8 && hour < 11) {
  document.getElementById("mon-8am").style.backgroundColor = "green";
}
if (dayOfWeek === 2 && ((hour >= 8 && hour < 11) || (hour >= 11 && hour < 14))) {
  if (hour >= 8 && hour < 11) {
    document.getElementById("tue-8am").style.backgroundColor = "green";
  } else {
    document.getElementById("tue-11am").style.backgroundColor = "green";
  }
}
if (dayOfWeek === 3 && ((hour >= 8 && hour < 11) || (hour >= 11 && hour < 14))) {
  if (hour >= 8 && hour < 11) {
    document.getElementById("wed-8am").style.backgroundColor = "green";
  } else {
    document.getElementById("wed-11am").style.backgroundColor = "green";
  }
}
if (dayOfWeek === 6 && hour >= 20 && hour < 23) {
  document.getElementById("fri-8pm").style.backgroundColor = "green";
}


  // Get references to the form fields
  const nameField = document.getElementById('name');
  const courseField = document.getElementById('course');
  const admissionField = document.getElementById('admission');

  // Set the values of the fields
  nameField.value = 'IT STUDENT';
  courseField.value = 'Bachelor in informationtechnology';
  admissionField.value = 'Bit/0000/2021';
  
  
  //try
  const nameFields = document.querySelectorAll('.student-name');
  nameFields.forEach((field) => {
  field.textContent = 'IT STUDENT';
});
  // Add event listener to button
  var attendanceBtn = document.getElementById("attendance-btn");
  attendanceBtn.addEventListener("click", function() {
    alert("Attendance signed!");
  });


		// Determine current week number based on start date
		const start_date = new Date(2023, 2, 1);  // Start date of week 1 (March 1, 2023)
		const today = new Date();
		const week_number = Math.ceil((today - start_date) / (7 * 24 * 60 * 60 * 1000));

		// Function to tick the appropriate week
		function tickWeek() {
			const week = "week" + week_number;
			document.getElementById(week).innerHTML = "&#10003;";  // Tick the appropriate week
		}

		// Add event listener to button
		document.getElementById("attendance-btn").addEventListener("click", tickWeek);
	

  


});
 function toggleAttendanceView() {
  var attendanceView = document.querySelector('.attendance-View');
  attendanceView.classList.toggle('show');
}

  
const allowedRanges = [
'105.167.234.137',
  '102.69.224.0/24',
  '102.69.227.0/24',
  '102.69.228.216/30',
  '102.215.4.0/22',
  '102.217.128.0/22',
  '102.218.233.0/24',
  '102.220.36.0/23',
  '102.220.39.0/24',
  '2c0f:e818::/118',
  '102.215.40.0-102.215.43.255',
'102.223.32.0-102.223.32.255'
];

function isIpAllowed(ip) {
  return allowedRanges.some(range => {
    const [startIp, cidr] = range.split('/');
    const mask = (0xffffffff << (32 - cidr)) >>> 0;
    const startIpInt = ipToInt(startIp);
    const endIpInt = startIpInt | ~mask;
    const ipInt = ipToInt(ip);
    return ipInt >= startIpInt && ipInt <= endIpInt;
  });
}

function ipToInt(ip) {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
}

fetch('https://ipapi.co/ip/')
  .then(response => response.text())
  .then(ip => {
    if (!isIpAllowed(ip)) {
      window.location.replace('https://www.pioneerblogspot.co.ke/access.html');
    }
  });
 
