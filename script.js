// =============================================
// Isuru Madusara - Portfolio JavaScript
// =============================================

// --- Navbar scroll effect ---
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Active nav link on scroll ---
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// --- Back to top button ---
var backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// --- Close mobile menu on link click ---
var navMenuLinks = document.querySelectorAll('#navMenu .nav-link');
var navCollapse = document.getElementById('navMenu');

navMenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (navCollapse.classList.contains('show')) {
            var bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: true });
        }
    });
});

// --- Simple contact form handler ---
var contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Show a simple alert (replace with backend later)
        alert('Thank you, ' + name + '! Your message has been received. I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// --- Skill bar animation on scroll ---
var skillBars = document.querySelectorAll('.skill-fill');
var skillsAnimated = false;

function animateSkillBars() {
    var skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    var rect = skillsSection.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100 && !skillsAnimated) {
        skillBars.forEach(function (bar) {
            var width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(function () {
                bar.style.width = width;
            }, 200);
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkillBars);

// --- Fade in elements on scroll ---
function handleScrollAnimation() {
    var cards = document.querySelectorAll('.skill-card, .cert-card, .event-card, .edu-card, .timeline-item');

    cards.forEach(function (card) {
        var rect = card.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 60) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.skill-card, .cert-card, .event-card, .edu-card, .timeline-item');

    cards.forEach(function (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run once on load
    handleScrollAnimation();
});

window.addEventListener('scroll', handleScrollAnimation);
