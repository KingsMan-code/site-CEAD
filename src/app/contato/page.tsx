import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function ContatoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#09009f] to-[#00ff95] bg-clip-text text-transparent">
        Contato
      </h1>
      <p className="max-w-xl text-center">
        Fale conosco para saber mais sobre nossos serviços.
      </p>
      <Link href="/home">
        <Button variant="outline">Voltar para Home</Button>
      </Link>
    </main>
  );
}
