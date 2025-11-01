// Sélectionne les éléments du DOM

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

// Ajoute un événement au clic sur l’icône du menu
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

