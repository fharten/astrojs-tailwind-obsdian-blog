document.getElementById('hamburger')!.addEventListener('click', () => {
  document.documentElement.classList.toggle('overflow-hidden');
  document.getElementById('nav-links')!.classList.toggle('hidden');
  document.getElementById('burger-close-button')!.classList.toggle('hidden');
  document.getElementById('burger-button')!.classList.toggle('hidden');
});
