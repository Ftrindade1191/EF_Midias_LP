import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-[#252528] border border-[#2E2E32] rounded-2xl p-6 md:p-8',
        hover && 'hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(250,169,22,0.08)] hover:border-[#FAA916]/25',
        className
      )}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  )
}
