// Menu toggle pour mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        // Fermer le menu quand on clique sur un lien (pour mobile)
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });
    });
}

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validation basique
        if (!fullname || !email || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Simulation d'envoi
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        this.reset();
    });
}

// Gestion de la newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Merci de vous être abonné à notre newsletter !');
            this.reset();
        } else {
            alert('Veuillez entrer une adresse email valide.');
        }
    });
}

// Script pour le bouton Load More
const loadMoreBtn = document.querySelector('.load-more button');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        alert('Chargement de plus de projets...');
        // Ici, vous pourriez ajouter du code pour charger dynamiquement plus d'éléments
    });
}

// Animation au survol des éléments du portfolio (uniquement sur desktop)
const portfolioItems = document.querySelectorAll('.portfolio-item');
if (portfolioItems.length > 0) {
    portfolioItems.forEach(item => {
        // Vérifier si on est sur desktop pour appliquer les effets de survol
        if (window.innerWidth > 768) {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
}

// Animation des cartes d'information
const infoCards = document.querySelectorAll('.info-card');
if (infoCards.length > 0) {
    infoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
}

// Effet de focus sur les champs de formulaire
const formInputs = document.querySelectorAll('input, textarea');
if (formInputs.length > 0) {
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

// Gestion du responsive
window.addEventListener('resize', function() {
    // Réinitialiser les effets de survol sur mobile
    if (portfolioItems.length > 0) {
        portfolioItems.forEach(item => {
            if (window.innerWidth <= 768) {
                item.style.transform = 'translateY(0)';
                item.style.transition = '';
            }
        });
    }
    
    // Fermer le menu automatiquement quand on passe en mode desktop
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier la taille de l'écran au chargement
    if (window.innerWidth <= 768 && navMenu) {
        navMenu.classList.remove('active');
    }
});