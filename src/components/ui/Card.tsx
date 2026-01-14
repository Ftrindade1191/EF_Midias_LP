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
        'bg-[#F9FAFB] border border-gray-200 rounded-2xl p-6 md:p-8',
        hover && 'hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20',
        className
      )}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  )
}
