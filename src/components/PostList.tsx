import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { $posts, loadAllPosts } from '../store/postStore';
import { $searchQuery, setSearchQuery } from '../store/searchStore';
import type { BlogPosts, BlogPost } from '../types/BlogPost';
import PostSingle from './PostSingle';

export default function PostList({ allPosts }: { allPosts: BlogPosts }) {
  const storePosts = useStore($posts);
  const searchQuery = useStore($searchQuery);

  useEffect(() => {
    if ($posts.get().length === 0) loadAllPosts(allPosts);
  }, []);

  const filteredPosts = storePosts.filter((post) => {
    const combined = (post.data.title ?? '') + (post.data.titleAppend ?? '');
    return combined.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1 className="h1 mytext-base mb-5 flex pt-28">ALL POSTS</h1>
      <div
        id="post-list"
        className="w-full md:grid md:grid-cols-1 md:gap-5 md:pt-0 lg:grid-cols-2 xl:grid-cols-3"
      >
        {filteredPosts.length > 0 ? (
          filteredPosts?.map((post: any) => <PostSingle post={post} key={post.id} />)
        ) : (
          <p className="mytext-base">loading...</p>
        )}
      </div>
    </div>
  );
}
