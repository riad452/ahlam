// script.js

// Fonction pour gérer le survol des éléments du menu
function handleHover(event) {
    event.target.style.backgroundColor = '#f0f0f0';  // Change la couleur de fond au survol
    event.target.style.color = '#333';  // Change la couleur du texte au survol
    event.target.style.transition = 'background-color 0.3s, color 0.3s';
}

function handleMouseOut(event) {
    event.target.style.backgroundColor = '';  // Réinitialise la couleur de fond
    event.target.style.color = '';  // Réinitialise la couleur du texte
}

// Ajouter les écouteurs d'événements de survol aux éléments du menu
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', handleHover);
    item.addEventListener('mouseout', handleMouseOut);
});

// Fonction pour gérer la mise en surbrillance de l'élément de menu actif
function handleScroll() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navItems.forEach(item => item.classList.remove('active')); // Retirer la classe 'active' de tous les éléments
            navItems[index].classList.add('active'); // Ajouter la classe 'active' à l'élément correspondant
        }
    });
}

// Ajouter un écouteur d'événement de défilement pour surveiller la section active
window.addEventListener('scroll', handleScroll);

// Appeler la fonction handleScroll lors du chargement pour mettre à jour l'élément actif
window.addEventListener('DOMContentLoaded', handleScroll);
