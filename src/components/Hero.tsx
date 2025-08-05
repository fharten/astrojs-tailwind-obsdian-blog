import { useEffect, useState } from 'react';
import type { BlogPost } from '../types/BlogPost';

export default function Hero({ post }: { post: BlogPost }) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { title, description, category, categoryLink, slug, createdAt } = post.data;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bg-base relative mt-28 flex h-screen flex-col items-stretch overflow-hidden rounded-sm"
      id="wrapper"
    >
      <img
        src="/images/hero/top.jpg"
        className={`image ${scrolled ? 'scrolled-hero-top' : ''}`}
        alt="Top Image"
      />
      <img
        src="/images/hero/bottom.jpg"
        className={`image ${scrolled ? 'scrolled-hero-bottom' : ''}`}
      />
      <div className="absolute top-1/2 left-1/2 z-[1] flex h-28 w-full -translate-x-1/2 -translate-y-1/2 flex-col">
        <a href={`/blog/${slug}`} className="transition-all md:hover:scale-105">
          <div className="p-5">
            <p className="mytext-base h2 text-center">{title}</p>
            <p className="mytext-muted p text-center">{description}</p>
          </div>
        </a>
        <div className="mt-auto flex justify-between px-5">
          <p className="mytext-muted p-small w-auto text-left">{createdAt}</p>
          <a href={`/categories/${categoryLink}`}>
            <p className="mytext-muted p-small w-auto text-right"># {category}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
