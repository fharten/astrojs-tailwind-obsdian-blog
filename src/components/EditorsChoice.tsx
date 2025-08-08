import type { BlogPost, BlogPosts } from '../types/BlogPost';
import PostSingle from './PostSingle';
import { useStore } from '@nanostores/react';
import { $editorsChoicePosts, loadEditorsChoicePosts } from '../store/postStore';
import { $searchQuery } from '../store/searchStore';
import { useEffect } from 'react';

export default function EditorsChoice({ editorsChoicePosts }: { editorsChoicePosts: BlogPosts }) {
  const storePosts = useStore($editorsChoicePosts);
  const searchQuery = useStore($searchQuery);

  useEffect(() => {
    if ($editorsChoicePosts.get().length === 0) loadEditorsChoicePosts(editorsChoicePosts);
  }, []);

  const filteredPosts = storePosts.filter((post) => {
    const combined = (post.data.title ?? '') + (post.data.titleAppend ?? '');
    return combined.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <h1 className="h1 mytext-base mb-5 hidden pt-28 md:flex">EDITOR'S CHOICE</h1>
      <div className="hidden w-full md:grid md:grid-cols-1 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post: BlogPost) => (
          <PostSingle key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
