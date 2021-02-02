'use strict';

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.burger__menu');
  const links = document.querySelectorAll('.burger__link');

  burger.addEventListener('click', () => {
    nav.classList.toggle('burger__menu--active');
    links.forEach(link => link.classList.toggle('burger__link--active'));
    burger.classList.toggle('rotate');
  });

  links.forEach(el => el.addEventListener('click', () => {
    nav.classList.toggle('burger__menu--active');
    links.forEach(link => link.classList.toggle('burger__link--active'));
    burger.classList.toggle('rotate');
  }));
};

navSlide();
