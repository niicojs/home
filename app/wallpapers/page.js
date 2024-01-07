import { cn } from '@/lib/utils';

const links = [
  { title: 'Elephants', url: 'https://i.imgur.com/KFFoI9L.jpeg' },
  { title: 'Cheval', url: 'https://i.imgur.com/70kXDEQ.jpg' },
  { title: 'Lion', url: 'https://i.imgur.com/A1ZvXDp.jpg' },
];

export default function Home() {
  return (
    <main className="mt-4 mx-4">
      <div
        className={cn(
          'text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]'
        )}
      >
        Animals
      </div>
      <div className="">
        <ul className="mt-3 list-disc ml-8">
          {links.map((l, idx) => (
            <li key={idx}>
              <a
                className="underline underline-offset-2"
                target="_blank"
                href={l.url}
              >
                {l.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
