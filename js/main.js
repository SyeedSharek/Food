//Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {

    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header_scrolled");

    } else {
        nav.classList.remove("header_scrolled");

    }

}

// Nav Hide

let navBar = document.querySelectorAll(".nav-link");
let navbarCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navbarCollapse.classList.remove("show");


    })


})
