'use strict!'

const buttonRed = document.querySelector('.user-btns button:first-child');
const mailModal = document.querySelector('.mail-modal');

buttonRed.addEventListener('click', () => {
    mailModal.style.width = `0px`;
    mailModal.style.height = `0px`;
    mailModal.style.display = `none`;
})