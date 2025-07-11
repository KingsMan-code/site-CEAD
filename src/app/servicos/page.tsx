import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function ServicosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#09009f] to-[#00ff95] bg-clip-text text-transparent">
        Serviços
      </h1>
      <p className="max-w-xl text-center">
        Conheça os serviços oferecidos pela CEAD.
      </p>
      <Link href="/contato">
        <Button variant="outline">Entre em contato</Button>
      </Link>
    </main>
  );
}
