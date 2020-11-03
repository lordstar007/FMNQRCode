//Read More Logic
var readmoreEx = document.querySelectorAll("[class*='readmore_expand']");
var readmoreEx1 = document.querySelectorAll(".readmore_expand_1");
var readmoreEx2 = document.querySelectorAll(".readmore_expand_2");

var readmore1Btn = document.getElementById("readmore_1");
var readmore2Btn = document.getElementById("readmore_2");

for (i = 0; i < readmoreEx.length; ++i) {
    readmoreEx[i].style.display = "none";
}

readmore1Btn.addEventListener("click", function(e) {
    e.preventDefault();
    for (i = 0; i < readmoreEx.length; ++i) {
        readmoreEx1[i].style.display = "inline";
        readmore1Btn.style.display = "none";
    }
});

readmore2Btn.addEventListener("click", function(e) {
    e.preventDefault();
    for (i = 0; i < readmoreEx.length; ++i) {
        readmoreEx2[i].style.display = "inline";
        readmore2Btn.style.display = "none";
    }
});

//Scroll to click
const links = document.querySelectorAll("a.scroll-to");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}