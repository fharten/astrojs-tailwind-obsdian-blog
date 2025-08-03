import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import type { BlogPost } from '../types/BlogPost';

export default function DesktopPostSingle({ post, key }: { post: BlogPost; key: string }) {
  return (
    <div className="col-span-1 mb-5 h-auto transition-all hover:scale-105" key={key}>
      <div className="bg-dark flex h-10 w-full items-center justify-center rounded-t-sm">
        <div className="mytext-muted w-1/6 pl-2">
          <Plus size={18} />
        </div>

        <p className="p-xsmall mytext-muted w-4/6 text-center">
          {/* <a href=`/categories/${post.data.categoryLink}`> */}
          root@{post.data.createdAt}: ~{/* </a> */}
        </p>
        <div className="mytext-muted flex w-1/6 justify-end pr-2">
          <X size={18} />
        </div>
      </div>
      <div className="flex h-44">
        <a href={`/blog/${post.data.slug}`} className="w-1/2 overflow-hidden">
          <img
            src={post.data.image.url}
            alt={post.data.image.alt}
            className="h-full w-full object-cover"
          />
        </a>
        <a href={`/blog/${post.data.slug}`} className="w-1/2">
          <div className="bg-light flex h-full w-full flex-col justify-between rounded-b-sm p-5">
            <div>
              <div className="flex">
                <p className="h2 mytext-base">{post.data.title}</p>
              </div>
              {/* {
                post.data.titleAppend && (
                  <div className="flex">
                    <p className="p-small mytext-muted mr-2">~</p>
                    <p className="h2 mytext-base">{post.data.titleAppend}</p>
                  </div>
                )
              }  */}
            </div>
            <div className="flex justify-end">
              <a href={`/categories/${post.data.categoryLink}`}>
                <p className="p-xsmall mytext-muted"># {post.data.category}</p>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
