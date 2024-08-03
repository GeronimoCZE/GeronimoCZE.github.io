document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Close the mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                document.getElementById('nav-links').style.display = 'none';
            }
        });
    });

     // Mobile menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinksContainer = document.getElementById('nav-links');
    menuIcon.addEventListener('click', function () {
        if (navLinksContainer.style.display === 'flex') {
            navLinksContainer.style.display = 'none';
        } else {
            navLinksContainer.style.display = 'flex';
        }
    });

    // Reveal animation on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            } else {

            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger reveal on load
});
