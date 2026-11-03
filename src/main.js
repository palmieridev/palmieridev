document.querySelector('#year').textContent = new Date().getFullYear();

// Content stays visible without JavaScript and when reduced motion is preferred.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.project, .about, .contact').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
  motionPreference.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('in-view'));
    }
  });
}
