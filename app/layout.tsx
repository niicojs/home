import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/theme-provider';
import { Top } from './top';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fr" className="dark">
        <head />
        <body className={cn('h-full dark:bg-slate-900', inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="flex min-h-screen flex-col pt-14">
              <Top />
              <div className="container flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
