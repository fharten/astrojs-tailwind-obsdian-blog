export function toggleTheme() {
  const root = document.documentElement;
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  document.querySelectorAll('.moon-icon').forEach((el) => el.classList.toggle('hidden', isLight));
  document.querySelectorAll('.sun-icon').forEach((el) => el.classList.toggle('hidden', !isLight));
}

export function loadSavedTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  }

  document
    .querySelectorAll('.moon-icon')
    .forEach((el) => el.classList.toggle('hidden', saved === 'light'));
  document
    .querySelectorAll('.sun-icon')
    .forEach((el) => el.classList.toggle('hidden', saved !== 'light'));
}
