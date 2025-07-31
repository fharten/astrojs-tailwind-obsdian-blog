export function toggleTheme() {
  const root = document.documentElement;
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  if (isLight) {
    document.getElementById('moon-icon')!.classList.add('hidden');
    document.getElementById('sun-icon')!.classList.remove('hidden');
  } else {
    document.getElementById('moon-icon')!.classList.remove('hidden');
    document.getElementById('sun-icon')!.classList.add('hidden');
  }
}

export function loadSavedTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  }
}
