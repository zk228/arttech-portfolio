// Highlight the active nav link as the user scrolls through projects
const sections = document.querySelectorAll('.project-section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));
