// PowerCoating.js

(function() {
    'use strict';
    
    // Initialize Powder Coating page
    function initializePowderCoatingPage() {
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
        
        // Form submission handling
        const enquiryForm = document.querySelector('form');
        if (enquiryForm) {
            enquiryForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                
                if (!name || !email || !phone) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // In a real implementation, you would send this data to a server
                console.log('Form submitted with data:', {
                    name: name,
                    company: document.getElementById('company').value,
                    email: email,
                    phone: phone,
                    requirements: document.getElementById('requirements').value
                });
                
                // Show success message
                alert('Thank you for your enquiry! We will get back to you soon.');
                enquiryForm.reset();
            });
        }
        
        // Download button functionality
        document.querySelectorAll('a[href="#"]').forEach(link => {
            if (link.textContent === 'Download') {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    // In a real implementation, this would trigger the actual download
                    alert('Download would start in a real implementation');
                });
            }
        });
        
        console.log('Powder Coating page initialized successfully');
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePowderCoatingPage);
    } else {
        initializePowderCoatingPage();
    }
})();