
var mainElement=document.querySelector("main");var adSection = document.createElement('section');adSection.classList.add('desktop-ad');adSection.innerHTML = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186"
     crossorigin="anonymous"></script>
<!-- vertical -->
<ins class="adsbygoogle"
     style="display:inline-block;width:160px;height:600px"
     data-ad-client="ca-pub-2705647526062186"
     data-ad-slot="1710327054"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
`;var firstChild=mainElement.firstChild;mainElement.insertBefore(adSection, firstChild);
window.onload = function() {const toggleButton = document.getElementById('toggle-button');const toggleElements = document.querySelectorAll('.toggle-element');toggleButton.addEventListener('click', function() {toggleElements.forEach(element => {element.classList.toggle('hidden');});});var scriptElement = document.createElement("script");scriptElement.async = true;scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186";scriptElement.crossOrigin = "anonymous";var head = document.querySelector("head");head.appendChild(scriptElement);var excludedpages =['disclaimer','fashionblogs','finance','farming','opinions','privacy-policy','websites','services','health','wellness','life','safety','technology','travel','jobs','politics','education','book-review'];var shouldAppendScript = false;var check;function scriptAdd(){for(var i = 0; i <=excludedpages.length; i++){var check ="/"+excludedpages[i]+'.html';var loc=window.location.pathname; if(loc === check || loc ==="/"){shouldAppendScript = false;break;}else{shouldAppendScript = true;}}if(shouldAppendScript){var script =document.createElement('script');script.type = 'text/javascript';script.src ='banner.js';document.head.appendChild(script);}}setTimeout(scriptAdd),1000;};
var excludedpages =['disclaimer','fashionblogs','finance','farming','opinions','privacy-policy','websites','services','health','wellness','life','safety','technology','travel','jobs','politics','education','book-review'];var shouldAppendScript = false;var check;function scriptAdd(){for(var i = 0; i <=excludedpages.length; i++){var check ="/"+excludedpages[i]+'.html';var loc=window.location.pathname; if(loc === check || loc ==="/"){shouldAppendScript = false;break;}else{shouldAppendScript = true;}}if(shouldAppendScript){var script =document.createElement('script');script.type = 'text/javascript';script.src ='banner.js';document.head.appendChild(script);}}setTimeout(scriptAdd,1000);
