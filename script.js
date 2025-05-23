// Slider

new Swiper('.swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    loop: true,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        350: {
            slidesPerView: 1.35
        },
        370: {
            slidesPerView: 1.5
        },
        400: {
            slidesPerView: 1.65
        },
        450: {
            slidesPerView: 1.8
        },
        500: {
            slidesPerView: 1.95
        },
        550: {
            slidesPerView: 2.05
        },
        600: {
            slidesPerView: 2.2
        },
        650: {
            slidesPerView: 2.4
        },
        700: {
            slidesPerView: 2.6
        },
        750: {
            slidesPerView: 2.8
        }
    }
})

let toggleSlider = function () {
    let slider = document.querySelector('.brands-slider');
    if (window.innerWidth > 767) {
        slider.style.display = 'none';
    } else {
        slider.style.display = 'block';
    }
}
toggleSlider();

window.addEventListener('resize', toggleSlider);

// Simple js

let elements = document.querySelectorAll('.brands-card');
let showButton = document.querySelector('.show-button');

let hideCards = function () {
    let from = window.innerWidth >= 1120 ? 8 : 6;
    for (let i = elements.length - 1; i >= from; i--) {
        elements[i].classList.add('brands-card--hidden');
    }
}

let allHide = function () {
    showButton.classList.add('show-button--hidden');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('brands-card--hidden');
    }
    hideCards();

};
allHide();

showButton.addEventListener('click', function () {
    let hiddenElements = document.querySelectorAll('.brands-card--hidden');
    if (hiddenElements.length > 0) {
        for (let i = 0; i < hiddenElements.length; i++) {
            hiddenElements[i].classList.remove('brands-card--hidden');
        }
        showButton.textContent = 'Скрыть все';
    } else {
        allHide();
        showButton.textContent = 'Показать все';
    }
})

if (window.innerWidth < 768) {
    showButton.classList.add('show-button--hidden');
}

window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        showButton.classList.add('show-button--hidden');
    } else {
        showButton.classList.remove('show-button--hidden');
        allHide();
    }
})