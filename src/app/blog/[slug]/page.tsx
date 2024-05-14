import './mdx.css'

import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { Mdx } from '@/components/mdx'

export const revalidate = 60

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allPosts
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }))
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug
  const post = allPosts.find((post) => post.slug === slug)

  console.log(allPosts, slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* <Header project={project} views={views} />
      <ReportView slug={project.slug} /> */}

      <article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
        <Mdx code={post.body.code} />
      </article>
    </div>
  )
}
