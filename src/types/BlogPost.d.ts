export interface BlogPost {
  id: string;
  body?: string;
  collection: 'blog';
  data: InferEntrySchema<'blog'>;
  rendered?: RenderedContent;
  filePath?: string;
}

export type BlogPosts = BlogPost[];
