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

document.addEventListener("DOMContentLoaded", () => {
  const text = "DARIA-DOBROLINSKI";
  const typedText = document.getElementById("typed-text");
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting && index < text.length) {
      // Typing effect
      typedText.textContent += text[index];
      index++;
      setTimeout(typeEffect, 150); // Typing speed
    } else if (isDeleting && index > 0) {
      // Deleting effect
      typedText.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 100); // Deleting speed
    } else if (!isDeleting && index === text.length) {
      // Pause after typing
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 5000); // Pause for 5 seconds
    } else if (isDeleting && index === 0) {
      // Restart typing
      isDeleting = false;
      typeEffect();
    }
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
  const navDots = document.querySelectorAll('.nav-dot');
  
  // Function to update active dot based on scroll position
  const updateActiveDot = () => {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Check if we're near the bottom of the page (contact section)
    if (scrollPosition + windowHeight >= documentHeight - 100) {
        navDots.forEach(dot => dot.classList.remove('active'));
        document.querySelector('[data-section="contact"]').classList.add('active');
        return;
    }

    // Regular section detection
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[index].classList.add('active');
        }
    });
  };

  // Add click event to each dot
  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const sectionId = dot.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Update active dot on scroll
  window.addEventListener('scroll', updateActiveDot);
  updateActiveDot(); // Initial check
});