var scriptElement = document.createElement("script");scriptElement.async = true;scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186";scriptElement.crossOrigin = "anonymous";var head = document.querySelector("head");head.appendChild(scriptElement);
window.onload=function(){var head = document.createElement("head");var link =document.createElement("link");link.rel="stylesheet";link.type = "text/css";link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";head.appendChild(link);document.head.appendChild(head);var menu=document.getElementsByClassName('hamburger');menu[0].innerHTML= '<i class="material-icons">menu_open</i>';
const toggleButton =document.getElementById('toggle-button');const toggleElements=document.querySelectorAll('.toggle-element');toggleButton.addEventListener('click', function(){toggleElements.forEach(element => {element.classList.toggle('hidden');});});};
