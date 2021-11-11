// JavaScript Document var: is een variable, ik selecteren html elementen om deze later te gaan manipuleren. eerst selecteeren ik de losse menubar strepen daarna selecteren de de container in dit geval de div waar de hamburger menu inzitten 
var hamburgerMenuBar1 = document.querySelector("header section span:first-of-type");
var hamburgerMenuBar2 = document.querySelector("header section span:nth-of-type(2)");
var hamburgerMenuBar3 = document.querySelector("header section span:nth-of-type(3)");
var containerMenuBars = document.querySelector("header div");
var navMenu = document.querySelector("header nav");
var navForm = document.querySelector("header form");
var searchIcon = document.querySelector("header section:nth-of-type(2) a");
var searchIconImg = document.querySelector("header section:nth-of-type(2) a img");
var searchIconImgSource = document.querySelector("header section:nth-of-type(2) a img").src;
var dimmer = document.querySelector("main section.dimmer");

var footerFirstLink = document.querySelector("footer section:first-of-type > article h4 a:first-of-type");
var footerText = document.querySelector("footer section:first-of-type article:first-of-type section");

/*Een JavaScript-functie is een codeblok dat is ontworpen om een ​​bepaalde taak uit te voeren.*/


function hamburgerToCross(){
    hamburgerMenuBar1.classList.toggle("barChange");
    hamburgerMenuBar2.classList.toggle("barChange");
    hamburgerMenuBar3.classList.toggle("barChange");
    navMenu.classList.toggle("show");
    dimmer.classList.toggle("show");
}

function navSearch() {
    // navform als hij de show class krijgt dat klapt het zoekveld uit
        navForm.classList.toggle("show");
        dimmer.classList.toggle("show");
        // als de class list de class show bevat komt er een  
        if (navForm.classList.contains("show")){
            searchIconImg.src = "../img/icons/close.png";
        }else {
            searchIconImg.src = "../img/icons/loupe.png";
        }
}

function openFooterLink() {
    footerText.classList.toggle("show")

}

containerMenuBars.addEventListener("click", hamburgerToCross);
searchIcon.addEventListener("click", navSearch);


footerFirstLink.addEventListener("click", openFooterLink);

