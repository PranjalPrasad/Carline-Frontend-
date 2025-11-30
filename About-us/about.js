// JavaScript for Carline Project About Page

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
    const sections = document.querySelectorAll('#about-company, #owner, #certifications');
    sections.forEach(section => {
        section.classList.add('opacity-0');
        observer.observe(section);
    });

    // View All Certifications button functionality
    const viewAllBtn = document.getElementById('viewAllCertifications');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            alert('All certifications would be displayed here. This is a demo functionality.');
            
            // Create a modal or expand the certifications section
            const certificationsSection = document.getElementById('certifications');
            const newCertifications = [
                {
                    title: 'ISO 45001:2018',
                    description: 'Occupational health and safety management systems certification.',
                    color: 'orange',
                    icon: 'fas fa-hard-hat'
                },
                {
                    title: 'ISO 50001:2018',
                    description: 'Energy management systems certification for improved energy performance.',
                    color: 'teal',
                    icon: 'fas fa-bolt'
                },
                {
                    title: 'OHSAS 18001',
                    description: 'Occupational Health and Safety Assessment Series certification.',
                    color: 'purple',
                    icon: 'fas fa-user-shield'
                }
            ];
            
            // Create and append additional certification cards
            const certificationsGrid = certificationsSection.querySelector('.grid');
            
            newCertifications.forEach(cert => {
                const certCard = document.createElement('div');
                certCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 fade-in-up cert-card';
                certCard.innerHTML = `
                    <div class="h-48 bg-${cert.color}-600 flex items-center justify-center">
                        <i class="${cert.icon} text-white text-6xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3 text-gray-800">${cert.title}</h3>
                        <p class="text-gray-700 mb-4">${cert.description}</p>
                        <div class="flex items-center text-${cert.color}-600">
                            <span class="mr-2">Valid until: 2025</span>
                            <i class="fas fa-check-circle"></i>
                        </div>
                    </div>
                `;
                certificationsGrid.appendChild(certCard);
            });
            
            // Disable the button after clicking
            viewAllBtn.disabled = true;
            viewAllBtn.textContent = 'All Certifications Loaded';
            viewAllBtn.classList.remove('btn-primary');
            viewAllBtn.classList.add('bg-gray-500', 'cursor-not-allowed');
        });
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

    // Add year to footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }

    // Handle company logo loading
    const companyLogo = document.querySelector('#about-company img');
    if (companyLogo) {
        companyLogo.addEventListener('load', function() {
            console.log('Company logo loaded successfully');
        });
        
        companyLogo.addEventListener('error', function() {
            console.log('Company logo failed to load, using placeholder');
            this.src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            this.alt = 'Carline Auto - Automotive Excellence';
        });
    }

    console.log('Carline Auto About Page loaded successfully!');
});