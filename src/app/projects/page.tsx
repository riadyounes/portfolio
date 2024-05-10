import { CardProject } from '@/components/card-project'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function Projects() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-zinc-950">
      <div className="mx-auto w-full max-w-[1280px] p-8">
        <div className="flex flex-col gap-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Projetos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-4 text-white">
            {Array.from({ length: 5 }).map((_, i) => (
              <CardProject
                key={i}
                title="Chatbot"
                description="Chatbot usando SDK da vercel e OpenAI"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
