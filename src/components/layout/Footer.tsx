import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1E] border-t border-[#2E2E32] py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-ef-midias.png"
                width={252}
                height={63}
                alt="EF Mídias"
                className="h-[60px] w-auto"
              />
            </Link>
            <p className="text-[#8E8E93] text-sm">
              Transformando dados em vendas, com tráfego pago e engenharia de IA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FBFFFE]">Links</h4>
            <ul className="space-y-2 text-sm text-[#8E8E93]">
              <li>
                <Link href="/" className="hover:text-[#FAA916] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ef-vendas" className="hover:text-[#FAA916] transition-colors">
                  EF Vendas
                </Link>
              </li>
              <li>
                <Link href="/bfd" className="hover:text-[#FAA916] transition-colors">
                  BFD
                </Link>
              </li>
              <li>
                <Link href="/landing-pages" className="hover:text-[#FAA916] transition-colors">
                  Landing Pages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FBFFFE]">Serviços</h4>
            <ul className="space-y-2 text-sm text-[#8E8E93]">
              <li>
                <Link href="/#trafego-pago" className="hover:text-[#FAA916] transition-colors">
                  Tráfego Pago
                </Link>
              </li>
              <li>
                <Link href="/ef-vendas" className="hover:text-[#FAA916] transition-colors">
                  IA Comercial
                </Link>
              </li>
              <li>
                <Link href="/bfd" className="hover:text-[#FAA916] transition-colors">
                  Desenvolvimento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FBFFFE]">Contato</h4>
            <ul className="space-y-2 text-sm text-[#8E8E93]">
              <li>
                <a href="https://wa.me/5519995800412" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAA916] transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@efmidias.com.br" className="hover:text-[#FAA916] transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2E2E32] text-center text-sm text-[#8E8E93]">
          <p>&copy; {new Date().getFullYear()} EF Mídias. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}
