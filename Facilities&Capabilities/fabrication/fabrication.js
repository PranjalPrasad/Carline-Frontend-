// fabrication.js

(function() {
    'use strict';
    
    // Initialize page
    function initializeFabricationPage() {
        // Add event listeners for CTA buttons
        const capabilitiesBtn = document.querySelector('a[href="#capabilities"]');
        const enquiryBtn = document.querySelector('a[href="#enquiry"]');
        
        if (capabilitiesBtn) {
            capabilitiesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const capabilitiesSection = document.getElementById('capabilities');
                if (capabilitiesSection) {
                    capabilitiesSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        
        if (enquiryBtn) {
            enquiryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const enquirySection = document.getElementById('enquiry');
                if (enquirySection) {
                    enquirySection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        
        // Form submission handler
        const enquiryForm = document.querySelector('form');
        if (enquiryForm) {
            enquiryForm.addEventListener('submit', handleFormSubmission);
        }
        
        // Add animation to cards on scroll
        initializeScrollAnimations();
        
        console.log('Fabrication page initialized successfully');
    }
    
    // Handle form submission
    function handleFormSubmission(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.company || !data.email || !data.phone) {
            alert('Please fill in all required fields');
            return;
        }
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your enquiry! We will get back to you soon.');
        
        // Reset form
        e.target.reset();
    }
    
    // Initialize scroll animations
    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all cards for animation
        const cards = document.querySelectorAll('.capability-card, .material-card, .application-card, .download-card');
        cards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFabricationPage);
    } else {
        initializeFabricationPage();
    }
})();