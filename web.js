var scriptElement = document.createElement("script");scriptElement.async = true;scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186";scriptElement.crossOrigin = "anonymous";var head = document.querySelector("head");head.appendChild(scriptElement);
window.onload=function(){var head = document.createElement("head");
var link = document.createElement("link");

link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";

head.appendChild(link);
document.head.appendChild(head);


var menu=document.getElementsByClassName('hamburger');
                         
menu[0].innerHTML= '<i class="material-icons">menu_open</i>';

const toggleButton =document.getElementById('toggle-button');const toggleElements=document.querySelectorAll('.toggle-element');toggleButton.addEventListener('click', function()
              {toggleElements.forEach(element => {element.classList.toggle('hidden');});});
  var excludedpages =['disclaimer','fashionblogs','finance','farming','opinions','privacy-policy','websites','services','health','wellness','life','safety','technology','travel','jobs','politics','education','book-review'];var shouldAppendScript = false;var check;function scriptAdd(){for(var i = 0; i <=excludedpages.length; i++){var check ="/"+excludedpages[i]+'.html';var loc=window.location.pathname; if(loc === check || loc ==="/"){shouldAppendScript = false;break;}else{shouldAppendScript = true;}}if(shouldAppendScript){var script =document.createElement('script');script.type = 'text/javascript';script.src ='banner.js';document.head.appendChild(script);}}setTimeout(scriptAdd),1000;};
