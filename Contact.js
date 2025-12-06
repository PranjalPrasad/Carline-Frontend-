// File upload handling
document.addEventListener('DOMContentLoaded', function() {
    
    // File upload display name
    const fileInput = document.getElementById('quote-file');
    const fileLabel = document.querySelector('.file-label .file-name');
    
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                fileLabel.textContent = fileName;
            } else {
                fileLabel.textContent = 'No File Chosen';
            }
        });
    }
    
    // Enquiry Form Submission
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstname: document.getElementById('enquiry-firstname').value,
                lastname: document.getElementById('enquiry-lastname').value,
                phone: document.getElementById('enquiry-phone').value,
                email: document.getElementById('enquiry-email').value,
                message: document.getElementById('enquiry-message').value
            };
            
            // Validate form
            if (!validateEnquiryForm(formData)) {
                return;
            }
            
            // Show success message
            showMessage(enquiryForm, 'success', 'Thank you! Your enquiry has been submitted successfully. We will get back to you soon.');
            
            // Reset form
            enquiryForm.reset();
            
            // Here you would typically send the data to a server
            console.log('Enquiry Form Data:', formData);
        });
    }
    
    // Quote Form Submission
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('quote-name').value,
                company: document.getElementById('quote-company').value,
                phone: document.getElementById('quote-phone').value,
                email: document.getElementById('quote-email').value,
                product: document.getElementById('quote-product').value,
                quantity: document.getElementById('quote-qty').value,
                message: document.getElementById('quote-message').value,
                file: document.getElementById('quote-file').files[0]
            };
            
            // Validate form
            if (!validateQuoteForm(formData)) {
                return;
            }
            
            // Show success message
            showMessage(quoteForm, 'success', 'Thank you! Your quote request has been submitted successfully. Our team will contact you shortly.');
            
            // Reset form
            quoteForm.reset();
            fileLabel.textContent = 'No File Chosen';
            
            // Here you would typically send the data to a server
            console.log('Quote Form Data:', formData);
        });
    }
});

// Validation Functions
function validateEnquiryForm(data) {
    // Validate first name
    if (!data.firstname.trim()) {
        showMessage(document.getElementById('enquiry-form'), 'error', 'Please enter your first name.');
        return false;
    }
    
    // Validate last name
    if (!data.lastname.trim()) {
        showMessage(document.getElementById('enquiry-form'), 'error', 'Please enter your last name.');
        return false;
    }
    
    // Validate phone
    if (!validatePhone(data.phone)) {
        showMessage(document.getElementById('enquiry-form'), 'error', 'Please enter a valid phone number.');
        return false;
    }
    
    // Validate email
    if (!validateEmail(data.email)) {
        showMessage(document.getElementById('enquiry-form'), 'error', 'Please enter a valid email address.');
        return false;
    }
    
    return true;
}

function validateQuoteForm(data) {
    // Validate name
    if (!data.name.trim()) {
        showMessage(document.getElementById('quote-form'), 'error', 'Please enter your name.');
        return false;
    }
    
    // Validate phone
    if (!validatePhone(data.phone)) {
        showMessage(document.getElementById('quote-form'), 'error', 'Please enter a valid phone number.');
        return false;
    }
    
    // Validate email
    if (!validateEmail(data.email)) {
        showMessage(document.getElementById('quote-form'), 'error', 'Please enter a valid email address.');
        return false;
    }
    
    // Validate file size if file is uploaded
    if (data.file) {
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (data.file.size > maxSize) {
            showMessage(document.getElementById('quote-form'), 'error', 'File size should not exceed 10MB.');
            return false;
        }
    }
    
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone.trim());
}

function showMessage(form, type, message) {
    // Remove any existing messages
    const existingMessage = form.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    
    // Insert message at the top of the form
    form.insertBefore(messageDiv, form.firstChild);
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.style.transition = 'opacity 0.5s';
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 500);
        }, 5000);
    }
}

// Smooth scroll for internal links
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

// Add input animation on focus
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});