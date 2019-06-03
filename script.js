const pageHeading = document.querySelector("#page-heading");
pageHeading.addEventListener('click', function() {
    let randomColor = Math.floor(Math.random() * 3);
    if (randomColor === 0 ) {
        pageHeading.style.color = 'red';
    } else if (randomColor === 1) {
        pageHeading.style.color = 'orange';
    } else {
        pageHeading.style.color = 'seashell';
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    // let i;
    let slides = document.querySelectorAll('.mySlides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display= "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
}

