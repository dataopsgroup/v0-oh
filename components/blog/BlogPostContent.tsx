import type React from "react"

interface BlogPostContentProps {
  content: string
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => {
  return (
    <div className="blog-post-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default BlogPostContent
