window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Función para resaltar el enlace de la página actual
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-container a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active-page');
        // Extrae solo el nombre del archivo del href
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active-page');
        }
    });
}

// Ejecuta al cargar la página
window.addEventListener('DOMContentLoaded', setActiveNavLink);