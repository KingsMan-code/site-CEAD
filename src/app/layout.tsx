import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import "./globals.css";
import "./styles/cursor.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Theme>
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
