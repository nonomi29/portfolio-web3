const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

function toggleMenu() {
  navMenu.classList.toggle('open');
  const isOpen = navMenu.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', toggleMenu);

  // Close mobile menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

// Highlight current nav item on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

function onScroll() {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
