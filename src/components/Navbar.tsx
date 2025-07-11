import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-10 p-4">
      
      <nav className="mx-auto flex max-w-5xl items-center justify-center rounded-full bg-[rgba(76,76,76,0.36)] px-6 py-3 backdrop-blur text-white">
        <ul className="flex flex-wrap justify-evenly gap-6 font-semibold w-full">

          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:underline">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="hover:underline">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:underline">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
