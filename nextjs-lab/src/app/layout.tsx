import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Link from "next/link";
import CartSummary from "./components/CartSummary";

export const metadata = {
  title: "ZECH_OS | NEXT.JS PATTERNS",
  description: "Advanced Lab Submission 23-0339-05",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <CartProvider>
          <header className="border-b-4 border-white sticky top-0 bg-black z-50">
            <nav className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-3xl font-black uppercase tracking-tighter italic">
                ZECH_DEV <span className="text-xs font-mono text-accent ml-2">[VER_23-0339-05]</span>
              </div>
              
              <div className="flex gap-6 font-black uppercase text-[10px] tracking-widest items-center">
                <Link href="/" className="hover:text-accent border-b-2 border-transparent hover:border-accent transition-all">Home</Link>
                <Link href="/posts" className="hover:text-accent border-b-2 border-transparent hover:border-accent transition-all">Archive</Link>
                <Link href="/contact" className="hover:text-accent border-b-2 border-transparent hover:border-accent transition-all">Contact</Link>
                <Link href="/shop" className="hover:text-accent border-b-2 border-transparent hover:border-accent transition-all">Market</Link>
                
                <span className="text-zinc-700">|</span>
                
                <CartSummary />
              </div>
            </nav>
          </header>

          <main className="max-w-6xl mx-auto min-h-screen p-8">
            {children}
          </main>

          <footer className="mt-20 bg-white text-black p-10 border-t-8 border-accent">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-black uppercase tracking-tight">
              <div>
                <p className="text-lg italic underline decoration-4 decoration-accent">RIAD LAB // 2026</p>
                <p className="text-[10px] mt-1 text-zinc-600 font-mono">Developer: Zech Pugales</p>
              </div>
              <div className="text-right">
                <p className="text-xl">ID_REF: 23-0339-05</p>
                <p className="text-[10px] bg-black text-white px-2 py-1 mt-1 inline-block">Status: Final Submission</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}