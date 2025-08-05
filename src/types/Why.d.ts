export interface Why {
  id: string;
  slug: string;
  body: string;
  data: {
    title: string;
    titleAppend: string | null;
    createdAt?: string | null;
    image: { url: string; alt: string };
  };
}

export type RawWhy = {
  id: string;
  slug: string;
  body: string;
  data: {
    title: string;
    titleAppend?: string; // optional in the schema
    pubDate: Date; // pubDate is a Date
    image: { url: string; alt: string };
  };
};

export type SerializedWhy = {
  id: string;
  slug: string;
  body: string;
  data: {
    title: string;
    titleAppend: string | null;
    createdAt?: string | null;
    image: { url: string; alt: string };
  };
};
