import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#09009f] to-[#00ff95] bg-clip-text text-transparent">
        Bem-vindo à Home!
      </h1>
      <div className="flex gap-4">
        <Link href="/sobre">
          <Button>Sobre nós</Button>
        </Link>
        <Link href="/servicos">
          <Button variant="outline">Serviços</Button>
        </Link>
        <Link href="/contato">
          <Button variant="outline">Contato</Button>
        </Link>
      </div>
    </main>
  );
}
