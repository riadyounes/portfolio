import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm duration-300',
    'active: opacity-80',
  ],
  variants: {
    variant: {
      ghost: 'rounded-md px-2 text-white/70 hover:text-white shadow-none',
      primary:
        'text-zinc-950 hover:bg-white/90 bg-gradient-to-r from-white/80 to-white ',
      outline:
        'border border-white/30 text-white/60 hover:bg-white/30 hover:text-white',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return <Component {...props} className={button({ variant, className })} />
}
