import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed bottom-0 left-0 right-0 z-10 p-4">

      <nav className="mx-auto flex max-w-5xl items-center justify-center rounded-full bg-[rgba(76,76,76,0.36)] px-6 py-3 backdrop-blur text-white">
        <ul className="flex w-full flex-wrap items-center justify-evenly font-semibold">

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
