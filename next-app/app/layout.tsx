import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Community Health Info Hub',
  description: 'A modern, accessible health information hub for the community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-[#F8FBFF] to-[#EDF4FF] text-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
