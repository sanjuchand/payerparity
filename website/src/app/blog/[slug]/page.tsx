import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/BlogPostContent";
import { CTASection } from "@/components/CTASection";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pb-12 pt-16 sm:pt-24">
        <Link
          href="/blog"
          className="text-sm font-medium text-accent hover:underline"
        >
          ← Back to blog
        </Link>

        <header className="mt-6 border-b border-card-border pb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.author}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        </header>

        <BlogPostContent html={post.content} />
      </article>

      <CTASection
        title="See what your payer's files reveal"
        description="Request a free Parity Report for your facility. We'll show you what comparable in-network hospitals are paid for the same codes."
        primaryLabel="Get Your Facility's Parity Report"
      />
    </>
  );
}
