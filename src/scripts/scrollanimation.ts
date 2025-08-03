document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('wrapper');

  window.addEventListener('scroll', () => {
    if (!wrapper) return;

    if (window.scrollY > 10) {
      wrapper.classList.add('scrolled');
    } else {
      wrapper.classList.remove('scrolled');
    }
  });
});
