// script.js

// DARK MODE TOGGLE
const toggleSwitch = document.querySelector('#darkModeToggle');
const body = document.body;

toggleSwitch.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Save user preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
  }
});

// MOBILE MENU TOGGLE
const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const navMenu = document.querySelector('#navMenu');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu on link click
      navMenu.classList.remove('active');
    }
  });
});

// SIMPLE CONTACT FORM VALIDATION
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name === '' || email === '' || message === '') {
      formStatus.textContent = 'Please fill all fields.';
      formStatus.style.color = 'red';
      return;
    }

    if (!validateEmail(email)) {
      formStatus.textContent = 'Please enter a valid email.';
      formStatus.style.color = 'red';
      return;
    }

    // If validation passes
    formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
    formStatus.style.color = 'green';
    contactForm.reset();
  });
}

// Email validation helper function
function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// OPTIONAL: Animation for project images on hover or scroll (example)
const projectImages = document.querySelectorAll('.project-img');
projectImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('zoom-in');
  });
  img.addEventListener('mouseleave', () => {
    img.classList.remove('zoom-in');
  });
});
