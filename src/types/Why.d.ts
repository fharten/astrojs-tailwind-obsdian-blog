export interface Why {
  id: string;
  slug: string;
  body: string;
  data: InferEntrySchema<'why'>;
}

export type RawWhy = {
  id: string;
  slug: string;
  body: string;
  data: InferEntrySchema<'why'>;
};

export type SerializedWhy = {
  id: string;
  slug: string;
  body: string;
  data: InferEntrySchema<'why'>;
};
