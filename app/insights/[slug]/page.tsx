import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"
import Balancer from "react-wrap-balancer"

import { Mdx } from "@/components/mdx-components"
import { SemanticLayout } from "@/components/semantic-layout"
import { siteConfig } from "@/config/site"
import { cn, formatDate } from "@/lib/utils"

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
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight", "lg:text-5xl")}>
            <Balancer>{post.title}</Balancer>
          </h1>
          {post.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{post.description}</Balancer>
            </p>
          )}
          <div className="text-sm text-muted-foreground">Published {formatDate(post.date)}</div>
        </div>
        <div className="mt-8">
          <Mdx>
            <MDXContent />
          </Mdx>
        </div>
      </article>
    </SemanticLayout>
  )
}
