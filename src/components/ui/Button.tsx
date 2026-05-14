import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200'

  const variants = {
    primary: 'bg-[#01366B] text-[#FBFFFE] hover:bg-[#014d96]',
    secondary: 'bg-[#252528] text-[#FBFFFE] hover:bg-[#2E2E32]',
    outline: 'border-2 border-[#FBFFFE]/30 text-[#FBFFFE] hover:bg-[#FBFFFE]/10 hover:border-[#FBFFFE]/60',
    gold: 'bg-[#FAA916] text-[#1B1B1E] font-semibold hover:bg-[#F59E0B] shadow-[0_4px_24px_rgba(250,169,22,0.3)] hover:shadow-[0_8px_32px_rgba(250,169,22,0.45)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
