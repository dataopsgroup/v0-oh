interface BlogPostContentProps {
  content: string
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="prose prose-xl max-w-none 
          prose-headings:font-bold prose-headings:text-gray-900 prose-headings:leading-tight
          prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
          prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
          prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:font-semibold
          prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6 prose-h4:font-semibold
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-ul:mb-6 prose-ul:space-y-2
          prose-ol:mb-6 prose-ol:space-y-2
          prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:my-6 prose-blockquote:italic
          prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
          prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
          prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
          prose-hr:border-gray-300 prose-hr:my-8
          prose-table:border-collapse prose-table:w-full prose-table:my-6
          prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-th:font-semibold
          prose-td:border prose-td:border-gray-300 prose-td:p-3"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
