import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preschool Worksheets Generator - Fun Learning for Kids!",
  description: "Generate beautiful and engaging worksheets for preschool children. Letters, numbers, shapes and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-2">
                <span className="text-4xl">🎨</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Preschool Worksheets
                </span>
              </a>
              <div className="flex gap-4">
                <a 
                  href="/" 
                  className="px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors font-semibold"
                >
                  Home
                </a>
                <a 
                  href="/generator" 
                  className="px-4 py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-colors font-semibold"
                >
                  Create Worksheets
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
