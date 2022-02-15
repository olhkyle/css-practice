'use strict' 

const tag = document.querySelector('.tag');

function updateTag () {
    tag.innerHTML = `
    window.screen = ${window.screen.width},${window.screen.height} <br/>
    window.outer = ${window.outerWidth},${window.outerHeight} <br/>
    window.inner = ${window.innerWidth},${window.innerHeight} <br/>
    `
}

function colorChange(){
    tag.style.color = 'blue';
}

window.addEventListener('resize', () => {
    updateTag();
    colorChange();
})

updateTag();