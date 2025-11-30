

// JavaScript for Carline Project Contact Page

document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('opacity-0');
        observer.observe(section);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            
            // Simulate API call
            setTimeout(() => {
                showMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 2000);
        });
    }

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.add('hidden');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            answer.classList.toggle('hidden');
        });
    });

    // View Larger Map Button
    const viewMapBtn = document.getElementById('viewMapBtn');
    if (viewMapBtn) {
        viewMapBtn.addEventListener('click', function() {
            alert('This would open a larger map or redirect to Google Maps with our location.');
        });
    }

    // Call Now Button
    const callNowBtn = document.getElementById('callNowBtn');
    if (callNowBtn) {
        callNowBtn.addEventListener('click', function() {
            alert('Calling +91 20 1234 5678');
            // In a real implementation, this would initiate a phone call
        });
    }

    // Email Us Button
    const emailUsBtn = document.getElementById('emailUsBtn');
    if (emailUsBtn) {
        emailUsBtn.addEventListener('click', function() {
            alert('Opening email client to send message to info@carlineproject.com');
            // In a real implementation, this would open the default email client
        });
    }

    // Helper Functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(text, type) {
        // Remove any existing messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}-message`;
        messageEl.textContent = text;
        messageEl.style.display = 'block';
        
        // Insert before the form
        contactForm.parentNode.insertBefore(messageEl, contactForm);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }

    // Add scroll to top functionality
    const scrollToTop = document.createElement('button');
    scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTop.className = 'fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300 z-50';
    scrollToTop.id = 'scrollToTop';
    document.body.appendChild(scrollToTop);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTop.classList.remove('opacity-0');
            scrollToTop.classList.add('opacity-100');
        } else {
            scrollToTop.classList.remove('opacity-100');
            scrollToTop.classList.add('opacity-0');
        }
    });

    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Carline Project Contact Page loaded successfully!');
});
