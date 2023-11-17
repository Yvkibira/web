const toggleButton = document.getElementById('toggle-button');const toggleElements = document.querySelectorAll('.toggle-element');
toggleButton.addEventListener('click', function() {toggleElements.forEach(element => {element.classList.toggle('hidden');});});

// Create a new script element
var scriptElement = document.createElement("script");scriptElement.async = true;scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186";scriptElement.crossOrigin = "anonymous";

// Get the head element of the current HTML page
var head = document.querySelector("head");

// Append the script element to the head
head.appendChild(scriptElement);

  var excludedpages = ['disclaimer','fashionblogs','farming','opinions','privacy-policy','websites','services','health','wellness','life','safety','travel','jobs','politics','education','book-review'];var shouldAppendScript = false;var check;function scriptAdd(){for(var i = 0; i < excludedpages.length; i++){var check = excludedpages[i]+'.html';var loc=window.location.pathname; if(loc === check || loc ==="https://www.pioneerblogspot.co.ke/"){console.log(check); shouldAppendScript = false;break;}else{shouldAppendScript = true;}}if (shouldAppendScript) {var script = document.createElement('script');script.type = 'text/javascript';script.src = 'banner.js';document.head.appendChild(script);}}window.addEventListener("load",scriptAdd);
 
