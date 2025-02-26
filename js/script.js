document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // mobile menu
  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
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
