'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import Button from '@/components/ui/Button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B1B1E]/90 backdrop-blur-md border-b border-[#2E2E32]">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-ef-midias.png"
              width={288}
              height={72}
              alt="EF Mídias"
              className="h-[72px] w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/#landing-pages" className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors text-sm font-medium">
              Landing Pages
            </Link>
            <Link href="/ef-vendas" className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors text-sm font-medium">
              EF Vendas
            </Link>
            <Link href="/bfd" className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors text-sm font-medium">
              BFD
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button
              variant="gold"
              href="https://wa.me/5519995800412?text=Olá! Gostaria de agendar uma consultoria estratégica."
              size="sm"
            >
              Agendar Consultoria
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FBFFFE]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2E2E32]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#landing-pages"
                className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Landing Pages
              </Link>
              <Link
                href="/ef-vendas"
                className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                EF Vendas
              </Link>
              <Link
                href="/bfd"
                className="text-[#FBFFFE]/60 hover:text-[#FBFFFE] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                BFD
              </Link>
              <Button
                variant="gold"
                href="https://wa.me/5519995800412?text=Olá! Gostaria de agendar uma consultoria estratégica."
                size="sm"
                className="w-full"
              >
                Agendar Consultoria
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
