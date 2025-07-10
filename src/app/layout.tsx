import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Theme>
          <Navbar />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
