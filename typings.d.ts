type SanityBody = {
  _createdAt: string;
  _rev: string;
  _id: string;
  _updatedAt: string;
  _type: string;
};

interface Post extends SanityBody {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  publishedAt: string;
}

interface Author extends SanityBody {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Category extends SanityBody {
  description: string;
  title: string;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
