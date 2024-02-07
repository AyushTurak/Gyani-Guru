document.addEventListener("DOMContentLoaded", function () {
    var welcomeContainer = document.getElementById("welcome-container");
    lab.style.opacity ="0"
    setTimeout(function () {
        welcomeContainer.style.opacity = "0";
    }, 3000);
});

// var currentSlide = 1;
// showSlide(currentSlide);

// function changeSlide(n) {
//     showSlide(currentSlide += n);
// }

// function showSlide(n) {
//     var slides = document.getElementsByClassName("slide");

//     if (n > slides.length) {
//         currentSlide = 1;
//     }

//     if (n < 1) {
//         currentSlide = slides.length;
//     }

//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[currentSlide - 1].style.display = "block";
// }

var currentSlide = 1;
showSlide(currentSlide);

// Automatically change slide every 3 seconds (3000 milliseconds)
var slideshowInterval = setInterval(function () {
    changeSlide(1);
}, 3000);

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        currentSlide = 1;
    }

    if (n < 1) {
        currentSlide = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "block";
}
