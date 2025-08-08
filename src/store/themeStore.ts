import { atom } from 'nanostores';

export const $themeIsLight = atom(false);

export function initTheme() {
  if (typeof window === 'undefined') return; // SSR guard

  const saved = localStorage.getItem('themeIsLight');
  const isLight = saved === 'true';
  $themeIsLight.set(isLight);
  document.documentElement.classList.toggle('light', isLight);
}

export function toggleTheme() {
  const newValue = !$themeIsLight.get();
  $themeIsLight.set(newValue);
  document.documentElement.classList.toggle('light', newValue);
  localStorage.setItem('themeIsLight', newValue.toString());
}
