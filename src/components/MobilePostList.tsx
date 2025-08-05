import type { BlogPost, BlogPosts } from '../types/BlogPost';
import DesktopPostSingle from './DesktopPostSingle';

export default function MobilePostList({ allPosts }: { allPosts: BlogPosts }) {
  return (
    <div className="w-full pt-28 md:hidden">
      {allPosts.map((post: BlogPost) => (
        <DesktopPostSingle key={post.id} post={post} />
      ))}
    </div>
  );
}
