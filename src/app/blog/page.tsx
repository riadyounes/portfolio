import { allPosts } from 'contentlayer/generated'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { Article } from './article'

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
            {posts.map((post) => (
              <Article key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
