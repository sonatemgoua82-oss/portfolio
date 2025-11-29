// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Recherche
    const searchIcon = document.getElementById('searchIcon');
    const searchContainer = document.getElementById('searchContainer');
    const closeSearch = document.getElementById('closeSearch');
    
    if (searchIcon && searchContainer) {
        searchIcon.addEventListener('click', function() {
            searchContainer.classList.add('active');
        });
        
        if (closeSearch) {
            closeSearch.addEventListener('click', function() {
                searchContainer.classList.remove('active');
            });
        }
    }
    
    // Fermer le menu en cliquant sur un lien
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav) {
                mainNav.classList.remove('active');
            }
        });
    });
});

// Fonctions pour la vidéo
function openVideo() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // Remplacez cette URL par votre vidéo
    videoFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    modal.classList.add('active');
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    modal.classList.remove('active');
    videoFrame.src = "about:blank";
}

// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
