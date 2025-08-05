import { atom } from 'nanostores';

export const $isMobileMenuOpen = atom(false);

export function toggleMobileMenu() {
  $isMobileMenuOpen.set(!$isMobileMenuOpen.get());
}
