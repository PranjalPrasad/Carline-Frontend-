// SubAssemblies.js

(function() {
    'use strict';
    
    // Initialize page functionality
    function initializeSubAssembliesPage() {
        // Add scroll animations for product sections
        const productSections = document.querySelectorAll('.product-section');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        productSections.forEach(section => {
            observer.observe(section);
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add loading states for buttons
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', function() {
                if (this.href.includes('request-quote') || this.href.includes('contact')) {
                    // Add loading state
                    const originalText = this.innerHTML;
                    this.innerHTML = `
                        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    `;
                    this.disabled = true;
                    
                    // Reset after 2 seconds (simulating processing)
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.disabled = false;
                    }, 2000);
                }
            });
        });
        
        // Initialize product image placeholders
        initializeProductImages();
        
        console.log('Sub-Assemblies page initialized successfully');
    }
    
    // Function to handle product image loading
    function initializeProductImages() {
        const productImages = document.querySelectorAll('.product-image-placeholder');
        
        productImages.forEach(placeholder => {
            // In a real implementation, this would load actual product images
            // For now, we'll just add a loading animation
            placeholder.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full">
                    <svg class="animate-pulse w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                    </svg>
                    <span class="mt-2 text-sm text-gray-500">Product Image</span>
                </div>
            `;
        });
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSubAssembliesPage);
    } else {
        initializeSubAssembliesPage();
    }
})();