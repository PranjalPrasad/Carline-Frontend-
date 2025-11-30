// Air Tanks Page JavaScript
(function() {
    'use strict';
    
    // Initialize page functionality
    function initializeAirTanksPage() {
        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Form submission handling
        const enquiryForm = document.querySelector('form');
        if (enquiryForm) {
            enquiryForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                
                if (!name || !email) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // In a real implementation, you would send the form data to a server
                // For now, we'll just show a success message
                alert('Thank you for your enquiry! We will contact you soon.');
                enquiryForm.reset();
            });
        }
        
        // Download button functionality
        document.querySelectorAll('.download-item a').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // In a real implementation, this would trigger the actual download
                // For demonstration, we'll just show a message
                const fileName = this.closest('.download-item').querySelector('h3').textContent;
                alert(`Downloading: ${fileName}`);
                
                // Simulate download completion
                setTimeout(() => {
                    console.log(`Download completed for: ${fileName}`);
                }, 1000);
            });
        });
        
        // Add animation to material cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe material and application cards
        document.querySelectorAll('.material-card, .application-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
        
        console.log('Air Tanks page initialized successfully');
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAirTanksPage);
    } else {
        initializeAirTanksPage();
    }
})();