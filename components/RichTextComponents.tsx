import Link from "next/link";
import Image from "next/image";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div>
          <Image
            className="object-contain rounded-lg"
            alt="blog-post-image"
            src={urlFor(value).url()}
            height={350}
            width={400}
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="py-5 list-disc space-y-5 text-xl font-semibold">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl py-10 font-semibold">{children}</h5>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5 text-2xl">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline hover:decoration-black decoration-[#F7AB0A]"
        >
          {children}
        </Link>
      );
    },
  },
};
