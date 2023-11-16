const toggleButton = document.getElementById('toggle-button');const toggleElements = document.querySelectorAll('.toggle-element');
toggleButton.addEventListener('click', function() {toggleElements.forEach(element => {element.classList.toggle('hidden');});});

// Create a new script element
var scriptElement = document.createElement("script");scriptElement.async = true;scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186";scriptElement.crossOrigin = "anonymous";

// Get the head element of the current HTML page
var head = document.querySelector("head");

// Append the script element to the head
head.appendChild(scriptElement);

 function scriptAdd(){var excludedpages = ['','disclaimer','fashion','farming','opinions'];var shouldAppendScript = true;for (var i = 0; i < excludedpages.length; i++) {var check = 'https://www.pioneerblogspot.co.ke/' + excludedpages[i];console.log(check); if (window.location.pathname === check) {shouldAppendScript = false;break;}}if (shouldAppendScript) {var script = document.createElement('script');script.type = 'text/javascript';script.src = 'banner.js';document.head.appendChild(script);}}window.addEventListener("load",scriptAdd);
 
