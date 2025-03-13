document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");

  // mobile menu toggle
  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  // close mobile menu after clicking on a link
  navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

function toggleContent(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.classList.contains('visible')) {
      section.classList.remove('visible');
  } else {
      section.classList.add('visible');
  }
}