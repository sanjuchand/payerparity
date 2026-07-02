type BlogPostContentProps = {
  html: string;
};

export function BlogPostContent({ html }: BlogPostContentProps) {
  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
