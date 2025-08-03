import { atom } from 'nanostores';

export const $searchQuery = atom('');
export const setSearchQuery = (query: string) => $searchQuery.set(query);
