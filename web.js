window.onload = function() {
    const toggleButton = document.getElementById('toggle-button');
    const toggleElements = document.querySelectorAll('.toggle-element');
    toggleButton.addEventListener('click', function() {
        toggleElements.forEach(element => {
            element.classList.toggle('hidden');
        });
    });
};
  var scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186";
    scriptElement.crossOrigin = "anonymous";
    var head = document.querySelector("head");
    head.appendChild(scriptElement);
