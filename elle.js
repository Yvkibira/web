var i1 = 0;
var images1 = ['Ellep.jpg','elle1.jpg', 'elle2.jpg', 'elle3.jpg' ,'elle4.jpg'];
var time1 = 3000;

function changeimg1() {
    document.case1.src = images1[i1];
    if (i1 < images1.length - 1) {
        i1++;
    } else {
        i1 = 0;
    }
    setTimeout(changeimg1, time1);
}
/*  
var i2 = 0;
var images2 = ['pic1.jpg', 'pic11.jpg', 'pic14.jpg'];
var time2 = 4000;

function changeimg2() {
    document.two.src = images2[i2];
    if (i2 < images2.length - 1) {
        i2++;
    } else {
        i2 = 0;
    }
    setTimeout(changeimg2, time2);
}
 */
window.onload = function() {
    changeimg1();
  /*   changeimg2();  */
};

/*    // Set the time period in milliseconds
  const timePeriod = 9000; // 9 seconds
  
  // Function to show the button
  function showButton() {
    document.getElementById("myButton").style.display = "block";
  }
  
  // Set a timeout to show the button after the time period has elapsed
  setTimeout(showButton, timePeriod);
 */
