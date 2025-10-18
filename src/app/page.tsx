import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "./sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, author->{_id, name, slug, image}}`;

const options = { next: { revalidate: 30 } };

// helper: convert Portable Text blocks to plain text
type SanityBlock = {
  _type?: string;
  children?: { _type?: string; text?: string }[];
};

function portableTextToPlainText(body: unknown): string {
  if (!Array.isArray(body)) return "";
  const blocks = body as SanityBlock[];
  return blocks
    .filter((blk): blk is SanityBlock => !!blk && blk._type === "block" && Array.isArray(blk.children))
    .map((blk) => (blk.children ?? []).map((child) => child?.text ?? "").join(""))
    .join("\n");
}

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => {
          const p = post;
          const excerpt = portableTextToPlainText(p.body);
          const authorName = p.author?.name ?? "Unknown";
          return (
            <li className="hover:underline" key={p._id}>
              <Link href={`/${p.slug.current}`}>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm text-gray-600">By {authorName}</p>
                <p>{excerpt}</p>
                <p>{new Date(p.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}