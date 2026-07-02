import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explainers on hospital price transparency, MRF files, payer disclosure data, and negotiation leverage for hospital executives.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Blog"
          title="Resources for hospital contracting teams"
          description="Plain-language explainers on price transparency data, pricing methodologies, and how to turn payer disclosure into negotiation leverage."
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {posts.length === 0 ? (
          <div className="rounded-xl border border-card-border bg-card/50 p-10 text-center">
            <p className="text-muted">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl border border-card-border bg-card/50 p-6 transition-colors hover:border-accent/30 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
