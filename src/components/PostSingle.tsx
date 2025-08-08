import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import type { BlogPost } from '../types/BlogPost';

export default function PostSingle({ post, key }: { post: BlogPost; key: string }) {
  return (
    <div className="group col-span-1 mb-5 h-auto transition-all md:hover:scale-105" key={key}>
      <div className="bg-dark flex h-10 w-full items-center justify-center rounded-t-sm">
        <div className="mytext-muted w-1/6 pl-2">
          <Plus size={18} />
        </div>

        <p className="p-small mytext-muted w-4/6 text-center">root@{post.data.createdAt}: ~</p>
        <div className="mytext-muted flex w-1/6 justify-end pr-2">
          <X size={18} />
        </div>
      </div>
      <div className="flex h-72 flex-col md:h-44 md:flex-row">
        <a
          href={`/blog/${post.data.slug}`}
          className="h-1/2 w-full overflow-hidden group-hover:hidden md:h-full md:w-1/2"
        >
          <img
            src={post.data.image.url}
            alt={post.data.image.alt}
            className="h-full w-full object-cover"
          />
        </a>
        <div className="bg-light flex h-full w-full flex-col justify-between rounded-b-sm p-5">
          <a href={`/blog/${post.data.slug}`} className="h-full w-full">
            <div>
              <div className="flex group-hover:hidden">
                <p className="p-small mytext-muted mr-2">~</p>
                <p className="h2 mytext-base">{post.data.title}</p>
              </div>
              {post.data.titleAppend && (
                <div className="flex group-hover:hidden md:hidden">
                  <p className="p-small mytext-muted mr-2">~</p>
                  <p className="h2 mytext-base">{post.data.titleAppend}</p>
                </div>
              )}
              <div className="hidden group-hover:flex">
                <p className="p-small mytext-muted mr-2">~</p>
                <p className="p mytext-base">{post.data.description}</p>
              </div>
            </div>
          </a>
          <div className="flex justify-end">
            <a href={`/categories/${post.data.categoryLink}`}>
              <p className="p-small mytext-muted"># {post.data.category}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
