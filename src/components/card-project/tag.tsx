import { ReactNode } from 'react'

export interface TagProps {
  name: string
  icon: ReactNode
}

export function Tag({ name, icon }: TagProps) {
  return (
    <div className="flex w-fit items-center gap-2 rounded-lg bg-zinc-900 p-2">
      {icon}
      <span className="text-sm text-zinc-500">{name}</span>
    </div>
  )
}
