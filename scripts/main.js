ScrollReveal().reveal('.showcase');
// ScrollReveal().reveal('.contenedor-items', { delay: 200 });
ScrollReveal().reveal('.information-cards', { delay: 200 });
ScrollReveal().reveal('.elegir-container', { delay: 200 });
ScrollReveal().reveal('.servicios-ofrecidos', { delay: 200 });
ScrollReveal().reveal('.proyectos', { delay: 650 });
ScrollReveal().reveal('.formulario-contacto', { delay: 200 });
ScrollReveal().reveal('.footer-links', { delay: 200 });
ScrollReveal().reveal('.lista-eleccion', { delay: 700 });


window.sr = ScrollReveal();

sr.reveal(".contenedor-items", {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
})

sr.reveal(".card-one-services", {
    origin: 'right',
    interval: 200,
    duration: 5000,
    distance: '150%'
})
sr.reveal(".card-two-services", {
    origin: '',
    interval: 200,
    duration: 5000,
    distance: '150%'
})
sr.reveal(".cards", {
    origin: 'top',
    interval: 200,
    duration: 5000,
    distance: '150%'
})

