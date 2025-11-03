 // Custom JavaScript for Portfolio

// Role text animation
document.addEventListener('DOMContentLoaded', function() {
  const roleSpans = document.querySelectorAll('.role-span');
  
  // Ensure the animation works correctly
  roleSpans.forEach((span, index) => {
    span.style.animationDelay = `${index * 3}s`;
  });
  
  // Smooth scroll for anchor links
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
  
  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});