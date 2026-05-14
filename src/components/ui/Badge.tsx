import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'gray' | 'gold' | 'navy'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-[#252528] text-[#FBFFFE] border border-[#2E2E32]',
    blue: 'bg-[#01366B]/20 text-[#FBFFFE] border border-[#01366B]/40',
    gray: 'bg-[#252528] text-[#8E8E93] border border-[#2E2E32]',
    gold: 'bg-[#FAA916]/10 text-[#FAA916] border border-[#FAA916]/30',
    navy: 'bg-[#01366B]/20 text-[#FBFFFE] border border-[#01366B]/40',
  }

  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-sm font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
