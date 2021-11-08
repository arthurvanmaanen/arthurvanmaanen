// JavaScript Document
var hamburgerMenuBar1 = document.querySelector("header section span:first-of-type");
var hamburgerMenuBar2 = document.querySelector("header section span:nth-of-type(2)");
var hamburgerMenuBar3 = document.querySelector("header section span:nth-of-type(3)");
var containerMenuBars = document.querySelector("header div");
var navMenu = document.querySelector("header nav");
var navForm = document.querySelector("header form");
var searchIcon = document.querySelector("header section:nth-of-type(2) a");
var searchIconImg = document.querySelector("header section:nth-of-type(2) a img");
var searchIconImgSource = document.querySelector("header section:nth-of-type(2) a img").src;

var footerFirstLink = document.querySelector("footer section:first-of-type > article h4 a:first-of-type");
var footerText = document.querySelector("footer section:first-of-type article:first-of-type section");


function hamburgerToCross(){
    hamburgerMenuBar1.classList.toggle("barChange");
    hamburgerMenuBar2.classList.toggle("barChange");
    hamburgerMenuBar3.classList.toggle("barChange");
    navMenu.classList.toggle("show");
}

function navSearch() {
    // vragen aan docent voor extra hulp, dit lukt mij niet #Hoofdpijn
        navForm.classList.toggle("show");
        if (searchIconImg.src = "../img/icons/loupe.png"){
            searchIconImg.src = "../img/icons/close.png";
        }else {
            searchIconImg.src = "../img/icons/loupe.png";
        }
}

function openFooterLink() {
    footerText.classList.toggle("show")

}

containerMenuBars.addEventListener('click', hamburgerToCross);
searchIcon.addEventListener('click', navSearch);


footerFirstLink.addEventListener("click", openFooterLink);

