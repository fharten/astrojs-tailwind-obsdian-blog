import { atom } from 'nanostores';

export const $isSearchBarOpen = atom(false);

export function toggleSearchBar() {
  $isSearchBarOpen.set(!$isSearchBarOpen.get());
}
