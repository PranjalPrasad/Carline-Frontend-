// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Mobile Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.has-dropdown').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('navMenu');
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        if (navMenu && mobileToggle) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });
});