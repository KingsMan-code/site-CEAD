import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/home" className="text-xl font-bold">
          CEAD
        </Link>
        <ul className="flex gap-4">
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
        </ul>
      </div>
    </nav>
  );
}
