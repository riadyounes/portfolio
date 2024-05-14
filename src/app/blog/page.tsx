import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`blog/${post.slug}`}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-100">
        {post.date} {post.slug}
      </time>

      <div className="text-sm text-gray-100 [&>*:last-child]:mb-0 [&>*]:mb-3">
        {post.description}
      </div>
    </div>
  )
}

export default function Blog() {
  const posts = allPosts

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] p-8">
        <div className="flex flex-col gap-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-2">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
