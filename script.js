// Typing Effect for Welcome Message
const typedText = "Welcome to my Portfolio";
let i = 0;
function typeWriter() {
    if (i < typedText.length) {
        document.getElementById("typed-text").innerHTML += typedText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        // Hide cursor after typing is complete
        document.querySelector('.cursor').style.opacity = 0;
    }
}

// Initialize AOS animation library
function initAnimations() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Progress Bar Functionality
function initProgressBar() {
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progressPercentage = (scrollTop / scrollHeight) * 100;
        document.getElementById('progress-bar').style.width = progressPercentage + '%';
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

// Scroll to section function with offset for fixed header
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Initialize everything when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    initProgressBar();
    initMobileMenu();
    initAnimations();
});
