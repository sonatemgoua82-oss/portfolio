
       

        // Animation Carousel
        
const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

function updateImage() {
    images.forEach(img => img.classList.remove("active"));
    images[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});


 // Animation du bandeau
        const bannerContent = document.querySelector('.banner-content');
        const bannerText = document.querySelector('.banner-text');
        bannerContent.appendChild(bannerText.cloneNode(true));

        // Formulaire newsletter
        document.querySelector('.email-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('.email-input').value;
            alert(`Merci pour votre inscription avec l'email: ${email}`);
            document.querySelector('.email-input').value = '';
        });
    
        // Menu toggle

        const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
