
  const track = document.querySelector("#track");
  const logoSlide = track.querySelector(".logo-slide");

  // Clone the logo slide multiple times
  for (let i = 0; i < 4; i++) {
    track.appendChild(logoSlide.cloneNode(true));
  }

  let scrollPosition = 0;
  const speed = 1;
  let isPlaying = true;
  let animationFrameId = null;

  function scroll() {
    if (!isPlaying) return; // Stop if paused

    scrollPosition -= speed;
    const slideWidth = logoSlide.offsetWidth;
    if (Math.abs(scrollPosition) >= slideWidth) {
      scrollPosition += slideWidth;
    }
    track.style.transform = `translateX(${scrollPosition}px)`;
    animationFrameId = requestAnimationFrame(scroll);
  }

  // Updated hover handlers
  track.addEventListener("mouseenter", () => {
    isPlaying = false;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  track.addEventListener("mouseleave", () => {
    isPlaying = true;
    scroll(); // Restart the animation
  });

  // Start the animation
  scroll();

