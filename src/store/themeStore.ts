import { atom } from 'nanostores';

export const $themeIsLight = atom(false);

export function toggleTheme() {
  console.log('first');
  $themeIsLight.set(!$themeIsLight.get());
  document.documentElement.classList.toggle('light');
}
