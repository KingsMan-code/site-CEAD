import { Theme } from "@radix-ui/themes";
// ...

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
