import './mdx.css'

import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { Mdx } from '@/components/mdx'

import { Header } from './header'

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

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-zinc-100">
      <Header post={post} />

      <article className="prose prose-zinc mx-auto px-4 py-12">
        <Mdx code={post.body.code} />
      </article>
    </div>
  )
}
