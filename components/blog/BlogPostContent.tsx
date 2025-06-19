interface BlogPostContentProps {
  content: string
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
