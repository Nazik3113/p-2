import $ from 'jquery';
import gsap from 'gsap';
import webp from './modules/webp';
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', () => {
  webp();

  function openAlert(btnClass) {
    const btn = document.querySelectorAll(btnClass);
    const modal = document.querySelector('.modal');
    const modalBg = document.querySelector('.modalBG');

    btn.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal--active');
        modalBg.classList.add('modalBG--active');
      });
    });
  }
  openAlert('.prefooter__socials-link');
  openAlert('.prefooter__contacts-phone');
  openAlert('.prefooter__contacts-email');
  openAlert('.contact-ways__item');
  openAlert('.the-team__wrapper-item');
  openAlert('.latest-works__category-readmore');

  function closeModal(btnClass, modalClass, modalBgClass, modalCloseClass, modalBgCloseClass) {
    const btn = document.querySelector(btnClass);
    const modal = document.querySelector(modalClass);
    const modalBg = document.querySelector(modalBgClass);

    btn.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
    });
    modalBg.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
    });
  }
  closeModal('.close__modal', '.modal', '.modalBG', 'modal--active', 'modalBG--active');

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
        setTimeout(document.getElementById(item.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }), 1000);
        document.querySelector('.mobile-menu').classList.remove('mobile-menu-active');
        document.querySelector('.mobile-menu__btn').classList.remove('mobile-menu__btn-active');
      });
    });
  }

  toggleClases('.header__link', 'header__link-active');
  toggleClases('.mobile-menu__link', 'mobile-,enu__link--active');

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

  window.addEventListener('scroll', () => {
    if (window.innerWidth < 570 && window.scrollY > document.querySelector('.first-page').offsetHeight - 60) {
      document.querySelector('.headerLIneFixed').classList.add('headerLIneFixed--active');
    } else {
      document.querySelector('.headerLIneFixed').classList.remove('headerLIneFixed--active');
    }
  });
});
