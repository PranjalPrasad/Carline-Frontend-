// Products Page JavaScript
(function() {
    'use strict';
    
    // Initialize products page
    function initializeProductsPage() {
        initializeProductFilter();
        initializeEnquiryModal();
        initializeSmoothScrolling();
        
        console.log('Products page initialized successfully');
    }
    
    // Product filtering functionality
    function initializeProductFilter() {
        const filterButtons = document.querySelectorAll('.product-nav-btn');
        const productCards = document.querySelectorAll('.product-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Filter products
                productCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Enquiry modal functionality
    function initializeEnquiryModal() {
        const modal = document.getElementById('enquiryModal');
        const enquiryButtons = document.querySelectorAll('.enquiry-btn');
        const closeModal = document.getElementById('closeModal');
        const enquiryForm = document.getElementById('enquiryForm');
        const enquiryProduct = document.getElementById('enquiryProduct');
        
        // Open modal
        enquiryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = this.getAttribute('data-product');
                enquiryProduct.value = product;
                modal.classList.remove('hidden');
            });
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
        
        // Handle form submission
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const product = enquiryProduct.value;
            
            // Here you would typically send the data to your server
            console.log('Enquiry submitted:', {
                product: product,
                name: formData.get('name'),
                company: formData.get('company'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message')
            });
            
            // Show success message (in a real implementation)
            alert('Thank you for your enquiry! We will get back to you soon.');
            
            // Close modal and reset form
            modal.classList.add('hidden');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    function initializeSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('#header-container')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeProductsPage);
    } else {
        initializeProductsPage();
    }
})();