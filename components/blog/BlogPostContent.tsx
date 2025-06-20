interface BlogPostContentProps {
  content: string
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="blog-content">
      <div id="blog-post-content" className="blog-content-inner" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
