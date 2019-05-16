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

