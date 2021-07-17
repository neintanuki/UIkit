const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const fadeUp = document.querySelectorAll('.fade-up');

const windowHeight = window.innerHeight / 1.25;

function fadeUpAnim() {
    fadeUp.forEach(el => {
        const elHeight = el.getBoundingClientRect().top;
        if (elHeight <= windowHeight) {
            el.classList.add('fade-up-show');
        } 
    })
}

fadeUpAnim();
document.addEventListener('scroll', fadeUpAnim);

burgerMenu.addEventListener('click', ()=> {
    navLinks.classList.remove('hidden');
})

closeBtn.addEventListener('click', ()=> {
    navLinks.classList.add('hidden');
})