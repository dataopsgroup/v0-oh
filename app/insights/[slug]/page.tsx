import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"

import { Mdx } from "@/components/mdx-components"
import { SemanticLayout } from "@/components/semantic-layout"
import { siteConfig } from "@/config/site"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { CalloutBox } from "@/components/callout-box"
import { BlogCTA } from "@/components/blog-cta"
import { RelatedArticles } from "@/components/blog/related-articles"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: siteConfig.url + "/" + post.slug,
      images: [siteConfig.url + post.image],
    },
  }
}

export default function PostPage({ params }: Props) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <SemanticLayout>
      <article className="container max-w-3xl py-12">
        <BlogPostHeader title={post.title} description={post.description} date={post.date} />
        <BlogPostContent>
          <Mdx>
            <MDXContent />
          </Mdx>
        </BlogPostContent>
        <CalloutBox title="Example Callout" content="This is an example of a callout box." />
        <BlogCTA variant="light" />
        <RelatedArticles currentPost={post} />
      </article>
    </SemanticLayout>
  )
}
