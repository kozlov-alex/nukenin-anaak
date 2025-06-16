
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
    reset: false 
})


sr.reveal(`.home__data`, {origin: 'top', delay: 400})
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800})


sr.reveal(`.store__box`, {
    origin: 'bottom',  
    delay: 200         
});

ScrollReveal().reveal('.extra__title', {
    origin: 'top',
    distance: '40px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.extra__description', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 400
});


ScrollReveal().reveal('.extra__img', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 600,
    interval: 200
});

ScrollReveal().reveal('.clan-objective__title', {
  origin: 'top',
  distance: '40px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.clan-objective__block', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 300,
  interval: 200
});


ScrollReveal().reveal('.character__title', {
  origin: 'top',
  distance: '40px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.character__card', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 300,
  interval: 200
});

ScrollReveal().reveal('.character__title', {
  origin: 'top',
  distance: '40px',
  duration: 1000,
  delay: 200
});
