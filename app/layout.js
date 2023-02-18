import { Inter } from '@next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Top } from '@/components/Top';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fr">
        <head />
        <body className={cn(inter.className)}>
          <div className="flex min-h-screen flex-col">
            <Top />
            <div className="container flex-1">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
}
