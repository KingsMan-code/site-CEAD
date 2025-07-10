import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Sobre nós</h1>
      <p className="max-w-xl text-center">
        Esta é a página “Sobre”, organizada com App Router.
      </p>
      <Link href="/home">
        <Button variant="outline">Voltar à Home</Button>
      </Link>
    </main>
  );
}
