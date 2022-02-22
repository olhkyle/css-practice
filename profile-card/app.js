'use strict'

const body = document.querySelector('body');
const headerLogo = document.querySelector('.header-logo');
const toggleBtn = document.querySelector('#nav-comp-btn');
const navBar = document.querySelector('.nav-bar');
const navBarAnchor1 = document.querySelector('.nav-bar-1 a');
const navBarAnchor2 = document.querySelector('.nav-bar-2 a');
const navBarAnchor3 = document.querySelector('.nav-bar-3 a')



toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    toggleBtn.classList.toggle('clicked');
})


headerLogo.addEventListener('click', () => {
    body.classList.toggle('active');
    headerLogo.classList.toggle('active');
    toggleBtn.classList.toggle('black');
    navBarAnchor1.classList.toggle('white');
    navBarAnchor2.classList.toggle('white');
    navBarAnchor3.classList.toggle('white');
})

