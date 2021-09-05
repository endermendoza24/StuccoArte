ScrollReveal().reveal('.showcase');
// // ScrollReveal().reveal('.contenedor-items', { delay: 200 });
// ScrollReveal().reveal('.information-cards', { delay: 200 });
// ScrollReveal().reveal('.elegir-container', { delay: 200 });
// ScrollReveal().reveal('.servicios-ofrecidos', { delay: 200 });
// ScrollReveal().reveal('.proyectos', { delay: 650 });
// ScrollReveal().reveal('.formulario-contacto', { delay: 200 });
// ScrollReveal().reveal('.footer-links', { delay: 200 });
// ScrollReveal().reveal('.lista-eleccion', { delay: 700 });
document.querySelector('.menu-btn').addEventListener('click', () =>
{
    document.querySelector('.nav-menu').classList.toggle('show');
});

window.sr = ScrollReveal();

sr.reveal(".contenedor-items", {
    duration: 4000,
    origin: 'left',
    distance: '-100px'
})

sr.reveal(".cards", {
    origin: 'right',
    interval: 400,
    duration: 3000,
    distance: '-100px'
})


sr.reveal(".elegir-container", {
    origin: 'left',
    interval: 400,
    duration: 3000,
    distance: '-100px'
})

sr.reveal(".servicios-ofrecidos", {
    origin: 'right',
    interval: 400,
    duration: 3000,
    distance: '-100px'
});

sr.reveal(".proyectos", {
    origin: 'top',
    interval: 900,
    duration: 3000,
    distance: '-100px'
});

sr.reveal(".formulario-contacto", {
    origin: 'bottom',
    interval: 400,
    duration: 3000,
    distance: '1000px'
})