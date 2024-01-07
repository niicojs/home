import { cn } from '@/lib/utils';

const demotivation = [
  { title: 'Remplaçable', url: 'https://imgur.com/AA8kgRK.jpg' },
  { title: 'Dying', url: 'https://i.imgur.com/hvoFc6L.jpg' },
  { title: 'Life Break', url: 'https://i.imgur.com/g7eASPo.png' },
  { title: 'Opportunity', url: 'https://i.imgur.com/pjU2Qbw.jpg' },
  { title: 'Motivation', url: 'https://i.imgur.com/4ownCm5.jpg' },
];

const animals = [
  { title: 'Elephants', url: 'https://i.imgur.com/KFFoI9L.jpeg' },
  { title: 'Cheval', url: 'https://i.imgur.com/70kXDEQ.jpeg' },
  { title: 'Lion', url: 'https://i.imgur.com/A1ZvXDp.jpeg' },
];

const others = [{ title: 'Burns', url: 'https://i.imgur.com/EsmxnBs.jpg' }];

const category = [
  { title: 'Demotivation', images: demotivation },
  { title: 'Animals', images: animals },
  { title: 'Others', images: others },
];

export default function Home() {
  return (
    <main className="mt-4 mx-4 flex flex-col gap-6">
      {category.map(({ title, images }) => (
        <div key={title}>
          <div
            className={cn(
              'text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]'
            )}
          >
            {title}
          </div>
          <div className="">
            <ul className="mt-3 list-disc ml-8">
              {images.map((l, idx) => (
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
        </div>
      ))}
    </main>
  );
}
