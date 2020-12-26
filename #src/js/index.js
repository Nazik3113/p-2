import $ from 'jquery';
import gsap from 'gsap';
import webp from './modules/webp';
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', () => {
  webp();

  $('.first-page__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    dots: true,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          dots: false,
        },
      },
    ],
  });

  function toggleClases(linkClass, activeClass) {
    const links = document.querySelectorAll(linkClass);
    links.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach((link) => {
          link.classList.remove(activeClass);
        });
        item.classList.add(activeClass);
      });
    });
  }

  toggleClases('.header__link', 'header__link-active');

  function latestWorks(btnClass, btnActiveClass, categoryClass, categoryActiveClass) {
    const btns = document.querySelectorAll(btnClass);
    const categories = document.querySelectorAll(categoryClass);

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btns.forEach((item) => {
          item.classList.remove(btnActiveClass);
        });
        btn.classList.add(btnActiveClass);

        categories.forEach((category) => {
          category.classList.remove(categoryActiveClass);
        });
        categories[btn.getAttribute('data-num') - 1].classList.add(categoryActiveClass);
      });
    });
  }

  latestWorks('.latest-works__categories-btn', 'latest-works__categories-btn-active', '.latest-works__category', 'latest-works__category-active');

  $('.workers-slider__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button class="arrow-left"><img src="../images/icons/workers-slider-arrow-left.png" alt=""></button>',
    nextArrow: '<button class="arrow-right"><img src="../images/icons/workers-slider-arrow-right.png" alt=""></button>',
  });

  function mobileMenu(btnCLass, btnActiveClass, menuClass, menuActiveClass) {
    const btn = document.querySelector(btnCLass);
    const menu = document.querySelector(menuClass);

    btn.addEventListener('click', () => {
      btn.classList.toggle(btnActiveClass);
      menu.classList.toggle(menuActiveClass);
    });
  }

  mobileMenu('.mobile-menu__btn', 'mobile-menu__btn-active', '.mobile-menu', 'mobile-menu-active');

  // Header links animation
  gsap.from('#header__link-1', {
    opacity: 0,
    translateX: 50,
    duration: 1,
    delay: 0.5,
  });
  gsap.from('#header__link-2', {
    opacity: 0,
    translateX: 50,
    duration: 1,
    delay: 0.4,
  });
  gsap.from('#header__link-3', {
    opacity: 0,
    translateX: 50,
    duration: 1,
    delay: 0.3,
  });
  gsap.from('#header__link-4', {
    opacity: 0,
    translateX: 50,
    duration: 1,
    delay: 0.2,
  });
  gsap.from('#header__link-5', {
    opacity: 0,
    translateX: 50,
    duration: 1,
    delay: 0.1,
  });

  // Header slider animation
  gsap.from('.first-page__item-header', {
    opacity: 0,
    translateY: 50,
    duration: 1,
    delay: 0.1,
  });
  gsap.from('.first-page__item-text', {
    opacity: 0,
    translateY: 50,
    duration: 1,
    delay: 0.2,
  });
  gsap.from('.slick-dots', {
    opacity: 0,
    translateY: 50,
    duration: 1,
    delay: 0.3,
  });
});