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

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn--right");
  const prevButton = document.querySelector(".carousel-btn--left");

  let currentIndex = 0;

  const updateCarousel = () => {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  updateCarousel();
});