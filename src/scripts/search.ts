// src/scripts/search.js

import type { BlogPosts } from '../types/BlogPost';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input') as HTMLInputElement;
const resultsList = document.getElementById('search-results');

let posts: BlogPosts = [];

// Fetch posts data from API
fetch('/api/posts.json')
  .then((res) => res.json())
  .then((data) => (posts = data));

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input?.value.toLowerCase();
  const results = posts.filter(
    (post) =>
      post.data.title.toLowerCase().includes(query) ||
      post.data.content.toLowerCase().includes(query) ||
      post.data.category?.toLowerCase().includes(query)
  );

  if (resultsList) {
    resultsList.innerHTML =
      results
        .map(
          (post) => `
        <li class="border-b py-2">
          <a class="text-blue-600 hover:underline" href="/blog/${post.data.slug}">
            ${post.data.title}
          </a>
        </li>
      `
        )
        .join('') || '<li>No results found.</li>';
  }
});
