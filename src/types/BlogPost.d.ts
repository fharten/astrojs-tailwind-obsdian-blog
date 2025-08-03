export interface BlogPost {
  id: string;
  slug: string;
  data: {
    title: string;
    titleAppend: string | null;
    slug: string;
    createdAt: string | null;
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
