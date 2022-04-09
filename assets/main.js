// Sidebar Menu
var menuBtn = document.querySelector('.header__menu-btn');
var sideBarOverlay = document.querySelector('.sidebar__overlay');
var sideBarBody = document.querySelector('.sidebar__body');
var sideBarClose = document.querySelector('.sidebar__body-close');

menuBtn.onclick = function() {
    sideBarBody.classList.toggle('active');
    sideBarOverlay.classList.toggle('active');
}

sideBarClose.onclick = function() {
    sideBarBody.classList.toggle('active');
    sideBarOverlay.classList.toggle('active');
}

sideBarOverlay.onclick = function() {
    sideBarBody.classList.toggle('active');
    sideBarOverlay.classList.toggle('active');
}

// SearchBox on mobile and tablet
var searchBtn = document.querySelector('.header__search-btn');
var searchForm = document.querySelector('.header__search-form');

searchBtn.onclick = function() {
    searchForm.classList.toggle('active');
}

window.onscroll = function() {
    searchForm.classList.remove('active');
}

// Home slider
var swiper = new Swiper(".home__slides", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Question and anwser
var questionElements = document.querySelectorAll('.faq__box-header');
var questionIcons = document.querySelectorAll('.faq__box-icon');
var answerElements = document.querySelectorAll('.faq__box-content');

questionElements.forEach(function(questionElement, index) {
    questionElement.onclick = function() {
        questionElement.classList.toggle('active');
        questionIcons[index].classList.toggle('active');
        answerElements[index].classList.toggle('active');
    }
});

// Review slider
var swiper = new Swiper(".review__slides", {
    loop: true,
    grabCursor: true,
    spaceBetween: 16,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});


