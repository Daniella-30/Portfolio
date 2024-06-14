
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = se.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classlist.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({

    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .Roadmap-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .purpose-img, .Statement ul',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .Purpose-content', { origin: 'right'});

const typed = new Typed('.multiple-text',{
    strings: ['Student', 'Business Owner', 'Photographer', 'Content Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});