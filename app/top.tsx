import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export function Top() {
  return (
    <div className="light:shadow-sm fixed inset-x-0 top-0 z-10 h-14 border-b bg-white dark:border-b dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-full w-full items-center px-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <HomeIcon className="w-6 h-6" />
          </Link>
          <span>Home</span>
          {/* <Link
            href="/getting-started"
            className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900"
          >
            Getting Started
          </Link>
          <Link
            href="/docs/components"
            className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900"
          >
            Components
          </Link> */}
        </div>
      </div>
    </div>
  );
}
