'use strict'

const body = document.querySelector('body');
const headerLogo = document.querySelector('.header-logo');
const toggleBtn = document.querySelector('#nav-comp-btn');
const navBar = document.querySelector('.nav-bar');


toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})


headerLogo.addEventListener('click', () => {
    body.classList.toggle('active');
    headerLogo.classList.toggle('active');
})

