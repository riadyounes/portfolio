import { Post } from 'contentlayer/generated'
import Link from 'next/link'

type Props = {
  post: Post
}

export const Article: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group rounded-lg bg-zinc-950/10 p-4 duration-1000 hover:bg-zinc-950/20 md:p-8">
        <div className="flex flex-wrap-reverse items-center justify-between ">
          <h2 className="font-display z-20 text-balance bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-xl font-medium text-transparent lg:text-3xl">
            {post.title}
          </h2>
          <span className="text-sm text-zinc-200 duration-1000 group-hover:text-white">
            {post.date && (
              <time dateTime={new Date(post.date).toISOString()}>
                {Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(
                  new Date(post.date),
                )}
              </time>
            )}
          </span>
        </div>
        <p className="z-20 mt-4 text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
          {post.description}
        </p>
      </article>
    </Link>
  )
}
