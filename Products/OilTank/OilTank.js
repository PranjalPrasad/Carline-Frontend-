// OilTanks.js

(function() {
    'use strict';
    
    // Initialize page functionality
    function initializeOilTanksPage() {
        // Form submission handler
        const enquiryForm = document.getElementById('oilTankEnquiryForm');
        if (enquiryForm) {
            enquiryForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const requiredFields = enquiryForm.querySelectorAll('[required]');
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
                    // For this example, we'll just show a success message
                    showFormSuccessMessage();
                } else {
                    alert('Please fill in all required fields.');
                }
            });
        }
        
        // Add loading state to images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            // If image is already loaded
            if (img.complete) {
                img.classList.add('loaded');
            }
        });
        
        // Smooth scrolling for anchor links
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
        
        console.log('Oil Tanks page initialized successfully');
    }
    
    // Show success message after form submission
    function showFormSuccessMessage() {
        const form = document.getElementById('oilTankEnquiryForm');
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Change button text to show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg';
            successMessage.innerHTML = `
                <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Thank you for your enquiry! We will contact you shortly.</span>
                </div>
            `;
            
            form.appendChild(successMessage);
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }, 1500);
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeOilTanksPage);
    } else {
        initializeOilTanksPage();
    }
})();