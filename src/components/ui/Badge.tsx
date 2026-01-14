import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'gray'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-200 text-black',
    blue: 'bg-blue-500/10 text-blue-600 border border-blue-500/30',
    gray: 'bg-gray-200 text-gray-700',
  }
  
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-sm font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
