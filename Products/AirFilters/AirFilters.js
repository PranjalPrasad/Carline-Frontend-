// AirFilters.js

(function() {
    'use strict';
    
    // Initialize page functionality
    function initializePage() {
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
                const requiredFields = this.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('border-red-500');
                    } else {
                        field.classList.remove('border-red-500');
                    }
                });
                
                if (isValid) {
                    // In a real application, you would send the form data to a server
                    // For now, we'll just show a success message
                    alert('Thank you for your enquiry! We will get back to you soon.');
                    this.reset();
                } else {
                    alert('Please fill in all required fields.');
                }
            });
        }
        
        // Add loading states to buttons
        const buttons = document.querySelectorAll('button, a[href="#enquiry"]');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (this.type === 'submit' || this.getAttribute('href') === '#enquiry') {
                    this.classList.add('opacity-75', 'cursor-not-allowed');
                    setTimeout(() => {
                        this.classList.remove('opacity-75', 'cursor-not-allowed');
                    }, 2000);
                }
            });
        });
        
        console.log('Air Filters page initialized successfully');
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePage);
    } else {
        initializePage();
    }
})();