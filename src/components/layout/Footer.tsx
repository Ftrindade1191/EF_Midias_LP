import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/logo-ef-midias.png"
                width={168}
                height={42}
                alt="EF Mídias"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              Transformando dados em vendas, com tráfego pago e engenharia de IA.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ef-vendas" className="hover:text-black transition-colors">
                  EF Vendas
                </Link>
              </li>
              <li>
                <Link href="/bfd" className="hover:text-black transition-colors">
                  BFD
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/#trafego-pago" className="hover:text-black transition-colors">
                  Tráfego Pago
                </Link>
              </li>
              <li>
                <Link href="/ef-vendas" className="hover:text-black transition-colors">
                  IA Comercial
                </Link>
              </li>
              <li>
                <Link href="/bfd" className="hover:text-black transition-colors">
                  Desenvolvimento
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-black">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://wa.me/55199995800412" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@efmidias.com.br" className="hover:text-black transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EF Mídias. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}
