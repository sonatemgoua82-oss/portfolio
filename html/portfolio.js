 
 // Script pour la soumission du formulaire de newsletter
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Merci de vous être abonné à notre newsletter!');
                this.reset();
            } else {
                alert('Veuillez entrer une adresse email valide.');
            }
        });

        // Script pour le bouton Load More
        document.querySelector('.load-more button').addEventListener('click', function() {
            alert('Chargement de plus de projets...');
            // Ici, vous pourriez ajouter du code pour charger dynamiquement plus d'éléments
        });

        // Animation au survol des éléments du portfolio
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        //Menu toggle
        const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
