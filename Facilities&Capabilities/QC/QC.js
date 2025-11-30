// QC.js - Quality Control Page JavaScript

(function() {
    'use strict';
    
    // Initialize page functionality
    function initializeQCPage() {
        // Add animation classes to testing procedure cards
        const testingCards = document.querySelectorAll('.bg-white.rounded-xl');
        testingCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-fade-in-up');
        });
        
        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Initialize image lazy loading
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
            }
        });
        
        console.log('QC & Testing page initialized successfully');
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeQCPage);
    } else {
        initializeQCPage();
    }
    
    // Export functions if needed
    window.QCPage = {
        initialize: initializeQCPage
    };
})();