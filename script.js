// ===========================
// DUO DIGITAL - INTERACTIVE SCRIPTS
// Neo-Brutalist Swiss Design
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initBlueprintGrid();
    initServiceCards();
    initCTAButtons();
    initParallax();
});

// ===========================
// NAVIGATION
// ===========================

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate toggle button
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(12px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-12px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    // Hide/show nav on scroll
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else if (currentScroll < lastScroll) {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Parallax scroll effect for hero (reduced to prevent overlap)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroTitle = document.querySelector('.hero-title');
        
        if (heroTitle && scrolled < window.innerHeight) {
            heroTitle.style.transform = `translateY(${scrolled * 0.15}px)`;
            heroTitle.style.opacity = 1 - (scrolled / 600);
        }
    });
}

// ===========================
// BLUEPRINT GRID ANIMATION
// ===========================

function initBlueprintGrid() {
    const grid = document.getElementById('blueprintGrid');
    let gridOpacity = 0.4;
    
    // Dynamic grid opacity based on scroll
    window.addEventListener('scroll', () => {
        const scrollPercentage = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        gridOpacity = 0.4 - (scrollPercentage * 0.2);
        grid.style.opacity = Math.max(gridOpacity, 0.1);
    });

    // Add grid coordinates effect (optional enhancement)
    createGridCoordinates();
}

function createGridCoordinates() {
    const hero = document.querySelector('.hero');
    const coordinates = document.createElement('div');
    coordinates.className = 'grid-coordinates';
    coordinates.style.cssText = `
        position: absolute;
        top: 50%;
        right: 2rem;
        font-family: var(--font-secondary);
        font-size: 0.75rem;
        color: var(--blueprint-blue);
        opacity: 0.5;
        writing-mode: vertical-rl;
        letter-spacing: 0.2em;
    `;
    
    window.addEventListener('scroll', () => {
        const x = Math.round(window.pageXOffset);
        const y = Math.round(window.pageYOffset);
        coordinates.textContent = `X:${x} Y:${y}`;
    });
    
    if (hero) {
        hero.appendChild(coordinates);
        coordinates.textContent = 'X:0 Y:0';
    }
}

// ===========================
// SERVICE CARDS INTERACTION
// ===========================

function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add click animation
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('card-link')) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });

        // Add "Learn More" button functionality
        const learnMoreBtn = card.querySelector('.card-link');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const serviceNumber = card.dataset.service;
                showServiceModal(serviceNumber);
            });
        }

        // Mouse move effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

function showServiceModal(serviceNumber) {
    // Placeholder for modal functionality
    console.log(`Service ${serviceNumber} selected`);
    alert(`Service ${serviceNumber} details would appear in a modal. This is a demo.`);
}

// ===========================
// CTA BUTTONS
// ===========================

function initCTAButtons() {
    const primaryCTA = document.getElementById('ctaPrimary');
    const allCTAs = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    allCTAs.forEach(btn => {
        // Ripple effect
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });

        // Button click handlers
        btn.addEventListener('click', function() {
            const btnText = this.querySelector('span').textContent.trim();
            handleCTAClick(btnText);
        });
    });
}

function handleCTAClick(buttonText) {
    console.log(`Button clicked: ${buttonText}`);
    
    switch(buttonText) {
        case 'START YOUR PROJECT':
        case 'BOOK A CALL':
            // Simulate form or calendar booking
            alert('📞 Booking calendar would open here. This is a demo.');
            break;
        case 'VIEW OUR WORK':
            // Scroll to work section or open portfolio
            alert('📁 Portfolio section would open here. This is a demo.');
            break;
        case 'VIEW PRICING':
            // Show pricing modal
            alert('💰 Pricing details would appear here. This is a demo.');
            break;
        default:
            alert(`${buttonText} clicked!`);
    }
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// ===========================
// PARALLAX EFFECTS
// ===========================

function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-blueprint-lines, .about-blueprint');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(15deg)`;
        });
    });
}

// ===========================
// COUNTER ANIMATION
// ===========================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = prefix + target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = prefix + Math.floor(current) + suffix;
        }
    }, 16);
}

// Animate metrics when they come into view
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const numberElement = entry.target.querySelector('.metric-number, .stat-value');
            if (numberElement) {
                const targetNumber = parseInt(numberElement.dataset.target || numberElement.textContent.replace(/\D/g, ''));
                
                if (!isNaN(targetNumber)) {
                    const prefix = numberElement.dataset.prefix || '';
                    const suffix = numberElement.dataset.suffix || '';
                    numberElement.textContent = prefix + '0' + suffix;
                    animateCounter(numberElement, targetNumber);
                    entry.target.dataset.animated = 'true';
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.metric-item, .stat-block').forEach(item => {
    metricsObserver.observe(item);
});

// ===========================
// BLUEPRINT LINE DRAWER
// ===========================

function drawBlueprintLines() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 1;
        opacity: 0.1;
    `;
    
    ctx.strokeStyle = '#0066CC';
    ctx.lineWidth = 1;
    
    // Draw random blueprint-style lines
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }
    
    document.body.appendChild(canvas);
}

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers if needed
const debouncedScroll = debounce(() => {
    // Additional scroll logic here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===========================
// EASTER EGG: KONAMI CODE
// ===========================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateBlueprintMode();
    }
});

function activateBlueprintMode() {
    document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    setTimeout(() => {
        document.body.style.filter = '';
    }, 3000);
    console.log('🎉 Blueprint Mode Activated!');
}

// ===========================
// UTILITY: CONSOLE MESSAGE
// ===========================

console.log(`
%c
████████████████████████████████████████
█                                      █
█   DUO DIGITAL                        █
█   Neo-Brutalist Design System        █
█   Built for Builders                 █
█                                      █
█   Website: duodigital.com            █
█   Year: 2025                         █
█                                      █
████████████████████████████████████████
`, 'color: #0066CC; font-family: monospace; font-size: 12px; font-weight: bold;');

console.log('%cInterested in how we built this? We\'re hiring! 🚀', 'color: #FF6B00; font-size: 14px; font-weight: bold;');

// ===========================
// TESTIMONIAL CAROUSEL
// ===========================

const testimonialsCarousel = (() => {
    const carousel = document.querySelector('.testimonials-grid');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    
    if (!carousel || !leftArrow || !rightArrow) return;
    
    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.testimonial-card').length;
    const cardsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    const maxIndex = Math.max(0, totalCards - cardsPerView);
    
    const updateCarousel = () => {
        const cardWidth = carousel.querySelector('.testimonial-card').offsetWidth;
        const gap = 40; // 2.5rem = 40px
        const offset = -(currentIndex * (cardWidth + gap));
        carousel.style.transform = `translateX(${offset}px)`;
        
        // Update button states
        leftArrow.disabled = currentIndex === 0;
        rightArrow.disabled = currentIndex >= maxIndex;
    };
    
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    rightArrow.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newCardsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
            const newMaxIndex = Math.max(0, totalCards - newCardsPerView);
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            updateCarousel();
        }, 250);
    });
    
    // Initialize
    updateCarousel();
})();

