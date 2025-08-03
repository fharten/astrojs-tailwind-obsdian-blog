import { atom } from 'nanostores';
import type { BlogPosts } from '../types/BlogPost';

export const $posts = atom<BlogPosts>([]);

export function loadPosts(posts: BlogPosts) {
  $posts.set([...posts]);
}
