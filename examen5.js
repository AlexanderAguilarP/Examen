// Capturar elementos del DOM
const inicioLink = document.getElementById('inicio-link');
const equiposLink = document.getElementById('equipos-link');
const estadiosLink = document.getElementById('estadios-link');
const noticiasLink = document.getElementById('noticias-link');


inicioLink.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Haz clic en Inicio');
});

equiposLink.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Haz clic en Equipos');
});

estadiosLink.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Haz clic en Estadios');
});

noticiasLink.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Haz clic en Noticias');
});


const bentoItems = document.querySelectorAll('.bento-item');

bentoItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
