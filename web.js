
const toggleButton = document.getElementById('toggle-button');
const toggleElements = document.querySelectorAll('.toggle-element');

toggleButton.addEventListener('click', function() {
  toggleElements.forEach(element => {
    element.classList.toggle('hidden');
  });
});

// Create a new script element
var scriptElement = document.createElement("script");
scriptElement.async = true;
scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2705647526062186";
scriptElement.crossOrigin = "anonymous";

// Get the head element of the current HTML page
var head = document.querySelector("head");

// Append the script element to the head
head.appendChild(scriptElement);

   var mainElement = document.querySelector("main");var aftermain = document.createElement('section');aftermain.classList="aff";aftermain.id="banner-id";aftermain.innerHTML='<a  id="responsive-link" target="_blank" rel="noopener noreferrer"><img id="responsive-image"></a>';var firstChild = mainElement.firstChild;mainElement.insertBefore(aftermain, firstChild);newSection=document.createElement("section");newSection.classList="footeraff";newSection.id="footer-banner-sect";newSection.innerHTML='<a  id="footer-link"href="" target="_blank" rel="noopener noreferrer"><img id="footerresponsive-image"></a>';mainElement.appendChild(newSection);
   var width=window.innerWidth;var image=document.getElementById("responsive-image");var link=document.getElementById("responsive-link");var footerlink=document.getElementById("footer-link");var footerb=document.getElementById("footerresponsive-image");
     //318 w
    var linkloc=["https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/28453574-e5f2-4d47-8976-990f6890e459","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/04dc5479-5bb1-4268-a4a8-d7cda4a63482","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/21427a00-0967-45af-b8c7-0e2c37849f9d","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/e23f62d1-af12-4a27-97ac-49e5197a91da","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/cddfcb4e-836e-4e29-8adc-9048fdbc6e89","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/9b3ea621-64a1-4d40-92f1-1a03f02eb268","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/13d14730-b577-43c4-a11f-eb8322081e1a"];
    var imageloc=["https://kol.jumia.com/banners/VMJpZ8tFyptTwCr6pLmR9Wvqu53EgAFVfepNG4J0.jpg","https://kol.jumia.com/banners/7Gj9AwlaU4ENZZEzdnGQb32iYvzGSRNu93atUW4D.jpg","https://kol.jumia.com/banners/DVY2ElW2CQjN1xpTlCmir0rJNz4rivJqkyaqT9zB.jpg","https://kol.jumia.com/banners/2UALs2HKv4pJnchp7hx4grx87jIEpgyJMmTZvbna.jpg","https://kol.jumia.com/banners/9x7u1vaBfSwzKUNUi4LlOxCzDyGULLTXsqdznH1w.jpg","https://kol.jumia.com/banners/1ZbMR941kkpt5pwZMXfffSxvceNlNZX42JgMWCyz.jpg","https://kol.jumia.com/banners/CznC8ylXhVjUfidIOCZsend4rBlk99DxYdkkhPsu.jpg"];
     var alttxt=["BLACK FRIDAY BEAUTY DEALS","BLACK FRIDAY DEFACTO DEALS","BLACK FRIDAY APPLIANCES DEALS","Black Friday Generic","BLACK FRIDAY TV & AUDIO DEALS","BEAUTY DEALS","BLACK FRIDAY PHONE DEALS"];function togglelink(){link.href=linkloc[i];footerlink.href=footerli[i];}function togglealt(){image.alt=alttxt[i];footerb.alt=alttxt[i];} 
    //728 w
    footerloc=["https://kol.jumia.com/banners/3QlZeexRbdk2MjVEUR7mgQR0Nusev2IUwP6dCKV1.jpg","https://kol.jumia.com/banners/07rGeQWy3bDVyuvSIy7L1pFrDVWfJ27l5X9LQP09.jpg" ,"https://kol.jumia.com/banners/vmGFAEypsH3kFx5Fs0kpmaR2kg8yOWAWZZuQguge.jpg" ,"https://kol.jumia.com/banners/v7BivOjflXFGE38PCAibFrPcUyvYe2RcGxhvmnZ1.jpg","https://kol.jumia.com/banners/8Ei5BiOleu4sLBtGZtDsJHexNEZqkBJXCFl5bRmv.jpg","","https://kol.jumia.com/banners/kP01eQocIhunOKsFEdk9pRLLKcb6cByc8TjXmqPi.jpg"];footerli=["https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/aee401cc-eafd-4f1e-9500-dfc5bd2428e7","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/b7da17aa-cb68-4212-9ace-c889deccd573","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/07c29f99-dee8-4695-a43a-48879130d4f2","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/124dabb6-d164-4a80-b24c-7af8b671523f","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/b78f6811-a400-4d7c-b0b1-df99a19ef72b","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/28282fa6-753b-411a-a2a9-7fc08303f5f5","https://kol.jumia.com/api/click/link/91f4a2dd-b2bd-414b-895d-c10fb52c42e3/4ffa69d2-37ae-4214-a6d0-c7a5c3c97d93"];
   var i=0;function toggleImage(){image.src=imageloc[i];if(imageloc[i]=="" || footerloc[i]==""){i++;}if(width>=728){footerb.src=footerloc[i];}togglelink();togglealt();i++;if(i >= imageloc.length){i=0;}setTimeout(toggleImage,3000);}setTimeout(toggleImage,5000);




