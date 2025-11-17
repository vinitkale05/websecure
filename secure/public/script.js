const API_BASE = 'http://localhost:5000/api';

// Load services on page load
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    setupEventListeners();
    setupMobileMenu();
});

// Load services from API
async function loadServices() {
    try {
        const response = await fetch(`${API_BASE}/services`);
        const services = await response.json();
        
        const servicesGrid = document.getElementById('servicesGrid');
        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Handle contact form submission
async function handleContactSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch(`${API_BASE}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, service, message })
        });

        const data = await response.json();

        if (response.ok) {
            showNotification('Message sent successfully! We will contact you soon.', 'success');
            document.getElementById('contactForm').reset();
        } else {
            showNotification(data.error || 'Error sending message', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Error sending message', 'error');
    }
}

// Handle newsletter subscription
async function handleNewsletterSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('newsletterEmail').value;

    try {
        const response = await fetch(`${API_BASE}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
            showNotification('Successfully subscribed to newsletter!', 'success');
            document.getElementById('newsletterForm').reset();
        } else {
            showNotification(data.error || 'Subscription failed', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Subscription failed', 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#00d946' : '#ff006e'};
        color: #fff;
        border-radius: 5px;
        z-index: 2000;
        animation: slideIn 0.3s ease-in-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Add animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
