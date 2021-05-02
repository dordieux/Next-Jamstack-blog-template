export type PostEntries = {
  items: [Item];
};

export type Item = {
  fields: PostField;
};

export type PostField = {
  title: string;
  subtitle: string;
  body: string;
  slug: string;
  publishedAt: String;
  image: {
    fields: {
      title: string;
      file: {
        url: string;
        fileName: string;
      };
    };
  };
};

export type Post = {
  title: string;
  subtitle: string;
  body: string;
  slug: string;
  publishedAt: String;
  image: string;
};
