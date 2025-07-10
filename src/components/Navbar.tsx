import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-10 p-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-[rgba(76,76,76,0.36)] px-6 py-3 backdrop-blur text-white">
        <Link href="/home" className="text-xl font-bold">
          CEAD
        </Link>
        <ul className="flex gap-6 font-semibold">
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
