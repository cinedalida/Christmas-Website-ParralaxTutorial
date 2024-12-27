

/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*============ MENU SHOW ============*/
// validate if constant exist
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*============ MENU HIDDEN ============*/
// validate if constant exist
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // Whien the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;  // also equivalent to window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 500, // di nag work sa 58, like hindi umabot sa "celebrate" so we adjustted
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']');

        sectionsClass.forEach(link => {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== PARALLAX ===============*/
// this is from https://dixonandmoe.com/rellax/
let parallax = new Rellax('.parallax');


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8})
gsap.from('.home__trineo', 1.2, {opacity: 0, x: -200, delay: .8})
gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: 1})


/*=============== SCROLL REVEAL ANIMATION ===============*/
// this is from https://scrollrevealjs.org/ 
// --- para may transition yung bawat scroll!!

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.about__data, .celebrate__img', {origin: 'right'})
sr.reveal('.about__img, .celebrate__data', {origin: 'left'})
sr.reveal('.send__card', {interval: 100})
sr.reveal('.footer')
