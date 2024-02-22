let contents = [...document.querySelectorAll(".content")];
let heroImgs = [...document.querySelectorAll(".image-hero picture")];
let next = document.querySelector(".next-icon");
let prev = document.querySelector(".prev-icon");
let nav = document.querySelector("nav");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");
let overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
    nav.classList.remove("-translate-y-full");
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
});

closeIcon.addEventListener("click", () => {
    nav.classList.add("-translate-y-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
});

next.addEventListener("click", function () {
    let activeImg = document.querySelector("picture.active");
    if (heroImgs.indexOf(activeImg) + 1 <= heroImgs.length - 1) {
        removeClasses();
        addClasses(heroImgs[heroImgs.indexOf(activeImg) + 1]);
    }
});

prev.addEventListener("click", function () {
    let activeImg = document.querySelector("picture.active");
    if (heroImgs.indexOf(activeImg) - 1 >= 0) {
        removeClasses();
        addClasses(heroImgs[heroImgs.indexOf(activeImg) - 1]);
    }
});

function addClasses (element) {
    element.classList.add("active");
    let index = heroImgs.indexOf(element);
    contents[index].classList.add("active");
    heroImgs.forEach((img) => {
        if (heroImgs.indexOf(img) > index) {
            img.classList.add("next");
        }
        else if (heroImgs.indexOf(img) < index) {
            img.classList.add("prev");
        }
    });
    if (index === heroImgs.length - 1) {
        next.classList.add("disabled");
    }
    else if (index === 0) {
        prev.classList.add("disabled");
    }
}

function removeClasses () {
    heroImgs.forEach((img) => img.className = "");
    contents.forEach((content) => content.classList.remove("active"));
    prev.classList.remove("disabled");
    next.classList.remove("disabled");
}