const words = [
    "Estudiante de Sistemas",
    "Desarrollador de Software",
    "Contribuidor de Código Abierto",
    "Emprendedor"
];
let i = 0, j = 0, isDeleting = false, current = '', timer;

function type() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;
    const word = words[i];
    if (isDeleting) {
        current = word.substring(0, j--);
    } else {
        current = word.substring(0, j++);
    }
    typewriter.textContent = current;

    if (!isDeleting && j > word.length) {
        isDeleting = true;
        timer = setTimeout(type, 1200); // Pausa antes de borrar
    } else if (isDeleting && j < 0) { // Cambiado de j === 0 a j < 0
        isDeleting = false;
        i = (i + 1) % words.length;
        timer = setTimeout(type, 400); // Pausa antes de escribir la siguiente
    } else {
        timer = setTimeout(type, isDeleting ? 50 : 100);
    }
}
document.addEventListener('DOMContentLoaded', type);