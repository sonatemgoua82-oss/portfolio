// Animation du bandeau défilant
function initBannerAnimation() {
    const bannerContent = document.querySelector('.banner-content');
    const bannerText = document.querySelector('.banner-text');
    
    if (bannerContent && bannerText) {
        // Dupliquer le contenu pour créer une boucle infinie
        bannerContent.appendChild(bannerText.cloneNode(true));
    }
}

// Gestion du carousel de projets
function initProjectsCarousel() {
    const dots = document.querySelectorAll('.dot');
    let currentDot = 0;

    // Clic sur les dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots[currentDot].classList.remove('active');
            dot.classList.add('active');
            currentDot = index;
        });
    });

    // Auto-rotation toutes les 3 secondes
    setInterval(() => {
        dots[currentDot].classList.remove('active');
        currentDot = (currentDot + 1) % dots.length;
        dots[currentDot].classList.add('active');
    }, 3000);
}

// Gestion du formulaire newsletter
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert(`Merci pour votre inscription avec l'email: ${email}`);
                emailInput.value = '';
            }
        });
    }
}

// Animation au scroll pour les cartes
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .project-card, .blog-card, .award-item'
    );

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Smooth scroll pour les liens d'ancrage
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorer les liens vides ou #
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Gestion du bouton play vidéo
function initVideoButton() {
    const playButton = document.querySelector('.play-button');
    
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Ouverture de la vidéo... (fonctionnalité à implémenter)');
            // Ici vous pouvez ouvrir une modale avec une vidéo YouTube/Vimeo
        });
    }
}

// Effet parallax sur la section hero
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < heroSection.offsetHeight) {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
}

// Menu mobile responsive
function initMobileMenu() {
    // Si vous voulez ajouter un menu hamburger pour mobile
    const header = document.querySelector('header');
    
    // Détection du scroll pour ajouter une ombre au header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// Compteur animé pour les pourcentages
function initCounterAnimation() {
    const counters = document.querySelectorAll('.service-list span:last-child');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50; // Diviser en 50 étapes
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target + '%';
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current) + '%';
                        }
                    }, 30);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initBannerAnimation();
    initProjectsCarousel();
    initNewsletterForm();
    initScrollAnimations();
    initSmoothScroll();
    initVideoButton();
    initParallaxEffect();
    initMobileMenu();
    initCounterAnimation();
    
    console.log('🎨 Motto Agency - Site chargé avec succès!');
});

// Gestion du redimensionnement de la fenêtre
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculer les éléments si nécessaire
        console.log('Fenêtre redimensionnée');
    }, 250);
});

// Animation spécifique pour la section servicess
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelector(".services-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        services.classList.add("in-view");
      }
    });
  });

  observer.observe(services);
});

// Animation vidéo pour la section video
// Ouvrir la vidéo
        function openVideo() {
            const modal = document.getElementById('videoModal');
            const videoFrame = document.getElementById('videoFrame');
            
            // Remplace par ton URL YouTube (ajoute ?autoplay=1 pour lecture automatique)
            videoFrame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Fermer la vidéo
        function closeVideo() {
            const modal = document.getElementById('videoModal');
            const videoFrame = document.getElementById('videoFrame');
            
            modal.classList.remove('active');
            videoFrame.src = '';
            document.body.style.overflow = 'auto';
        }

        // Fermer avec la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeVideo();
            }
        });

        // Fermer en cliquant en dehors de la vidéo
        document.getElementById('videoModal').addEventListener('click', (e) => {
            if (e.target.id === 'videoModal') {
                closeVideo();
            }
        });