
        // Gestion du formulaire de contact
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validation basique
            if (!fullname || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulation d'envoi
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Gestion de la newsletter
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });

        // Animation des cartes d'information
        const infoCards = document.querySelectorAll('.info-card');
        
        infoCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });

        // Effet de focus sur les champs de formulaire
        const formInputs = document.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });
