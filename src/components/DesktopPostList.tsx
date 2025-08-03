import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { $posts, loadPosts } from '../store/postStore';
import { $searchQuery, setSearchQuery } from '../store/searchStore';
import type { BlogPosts, BlogPost } from '../types/BlogPost';
import DesktopPostSingle from './DesktopPostSingle';

export default function DesktopPostList({ allPosts }: { allPosts: BlogPosts }) {
  const storePosts = useStore($posts);
  const searchQuery = useStore($searchQuery);

  useEffect(() => {
    if ($posts.get().length === 0) loadPosts(allPosts);
  }, []);

  const filteredPosts = storePosts.filter((post) => {
    const combined = (post.data.title ?? '') + (post.data.titleAppend ?? '');
    return combined.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1 className="h1 mytext-base mb-5 hidden pt-28 md:flex">ALL POSTS</h1>
      <div
        id="post-list"
        className="hidden w-full md:grid md:grid-cols-1 md:gap-5 lg:grid-cols-2 xl:grid-cols-3"
      >
        {filteredPosts.length > 0 ? (
          filteredPosts?.map((post: any) => <DesktopPostSingle post={post} key={post.id} />)
        ) : (
          <p className="mytext-base">loading...</p>
        )}
      </div>
    </div>
  );
}
