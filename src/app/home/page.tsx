import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Bem-vindo à Home!</h1>
      <Link href="/sobre">
        <Button>Sobre nós</Button>
      </Link>
    </main>
  );
}
