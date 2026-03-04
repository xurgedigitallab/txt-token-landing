document.addEventListener('DOMContentLoaded', () => {
  const introScreen = document.getElementById('intro-screen');
  const mainPage = document.getElementById('main-page');

  // After breathing animation completes (~4.5s), fade out intro and show main page
  setTimeout(() => {
    introScreen.classList.add('fade-out');
    setTimeout(() => {
      mainPage.classList.add('visible');
      introScreen.style.display = 'none';
    }, 1200);
  }, 5500);

  // Autoplay video when in view, pause when out
  const video = document.getElementById('video-area');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(video);

  });
