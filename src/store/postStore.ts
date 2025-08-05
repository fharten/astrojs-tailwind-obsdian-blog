import { atom } from 'nanostores';
import type { BlogPosts } from '../types/BlogPost';

export const $posts = atom<BlogPosts>([]);
export const $editorsChoicePosts = atom<BlogPosts>([]);
export const $categoryPosts = atom<BlogPosts>([]);

export function loadAllPosts(posts: BlogPosts) {
  $posts.set([...posts]);
}

export function loadEditorsChoicePosts(posts: BlogPosts) {
  $editorsChoicePosts.set([...posts]);
}

export function loadCategoryPosts(posts: BlogPosts) {
  $categoryPosts.set([...posts]);
}
