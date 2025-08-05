export interface BlogPost {
  id: string;
  slug: string;
  data: {
    title: string;
    titleAppend: string | null;
    description: string | null;
    slug: string;
    createdAt?: string | null;
    pubDate?: Date | null;
    editorsChoice: boolean;
    hero: boolean;
    image: {
      url: string;
      alt: string;
    };
    category: string;
    categoryLink: string;
  };
}

export type BlogPosts = BlogPost[];

export type RawPost = {
  id: string;
  data: {
    title: string;
    titleAppend?: string;
    editorsChoice?: boolean;
    description: string | null;
    hero?: boolean;
    slug: string;
    pubDate?: string | number | Date;
    image: { url: string; alt: string };
    category: string;
    categoryLink: string;
  };
};

export type SerializedPost = {
  id: string;
  slug: string;
  data: {
    title: string;
    titleAppend: string | null;
    editorsChoice: boolean;
    description: string | null;
    hero: boolean;
    slug: string;
    createdAt: string | null;
    image: { url: string; alt: string };
    category: string;
    categoryLink: string;
  };
};
