document.getElementById('page-up')!.addEventListener('click', () => {
  scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
  const pageUp = document.getElementById('page-up');

  window.addEventListener('scroll', () => {
    if (!pageUp) return;

    if (window.scrollY > 10) {
      pageUp.classList.add('scrolled');
      pageUp.classList.remove('unscrolled');
    } else {
      pageUp.classList.add('unscrolled');
      pageUp.classList.remove('scrolled');
    }
  });
});
