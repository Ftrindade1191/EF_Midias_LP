import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-container mx-auto px-6 md:px-20', className)}>
      {children}
    </div>
  )
}
