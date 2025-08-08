import type { RawWhy, SerializedWhy } from '../types/Why';

export function serializeWhy(rawWhy: RawWhy): SerializedWhy {
  return {
    id: rawWhy.id,
    slug: rawWhy.slug,
    body: rawWhy.body,
    data: {
      title: rawWhy.data.title,
      titleAppend: rawWhy.data.titleAppend ?? null,
      description: rawWhy.data.description,
      createdAt: rawWhy.data.pubDate ? rawWhy.data.pubDate.toLocaleDateString() : null,
      image: {
        url: rawWhy.data.image.url,
        alt: rawWhy.data.image.alt,
      },
    },
  };
}
