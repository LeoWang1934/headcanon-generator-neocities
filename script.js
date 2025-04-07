document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling effect
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Animation effects on scroll
    const animateOnScroll = function() {
        const featureCards = document.querySelectorAll('.feature-card');
        const testimonials = document.querySelectorAll('.testimonial');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        featureCards.forEach(card => {
            observer.observe(card);
            card.classList.add('fade-in');
        });
        
        testimonials.forEach(testimonial => {
            observer.observe(testimonial);
            testimonial.classList.add('slide-in');
        });
    };
    
    // Add scroll animation classes
    const addAnimationStyles = function() {
        const style = document.createElement('style');
        style.textContent = `
            .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .slide-in {
                opacity: 0;
                transform: translateX(-20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .animate {
                opacity: 1;
                transform: translate(0, 0);
            }
        `;
        document.head.appendChild(style);
    };
    
    addAnimationStyles();
    animateOnScroll();
    
    // Add responsive navigation functionality (if needed)
    const createResponsiveNav = function() {
        const nav = document.querySelector('nav');
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    };
    
    createResponsiveNav();
}); 