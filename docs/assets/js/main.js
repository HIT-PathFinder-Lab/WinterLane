
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const demoVideos = document.querySelectorAll(".video-card video");

if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target: video, isIntersecting, intersectionRatio }) => {
      if (isIntersecting && intersectionRatio >= 0.5) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: [0, 0.5] });

  demoVideos.forEach((video) => videoObserver.observe(video));
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
