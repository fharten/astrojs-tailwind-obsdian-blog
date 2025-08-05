import type { RawPost, SerializedPost } from '../types/BlogPost';

export function serializePosts(rawPosts: RawPost[]): SerializedPost[] {
  return rawPosts.map((post) => ({
    id: post.id,
    slug: post.data.slug,
    data: {
      title: post.data.title,
      titleAppend: post.data.titleAppend ?? null,
      editorsChoice: post.data.editorsChoice ?? false,
      hero: post.data.hero ?? false,
      description: post.data.description ?? null,
      slug: post.data.slug,
      createdAt: post.data.pubDate ? new Date(post.data.pubDate).toLocaleDateString() : null,
      image: {
        url: post.data.image.url,
        alt: post.data.image.alt,
      },
      category: post.data.category,
      categoryLink: post.data.categoryLink,
    },
  }));
}
