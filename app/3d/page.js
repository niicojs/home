import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="mt-4 mx-4">
      <div
        className={cn(
          'text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-4xl lg:leading-[1.1]'
        )}
      >
        3D
      </div>
      <div className="">
        <ul className="mt-3 list-disc ml-8">
          <li>
            <a
              className="underline underline-offset-2"
              target="_blank"
              href="https://www.tinkercad.com/things/53Z9TQMEg7H?sharecode=n44QGb4Ur-5pmHr_7arI3ZBwCLysVjRRvX3v9gB6708"
            >
              Pieuvre
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-2"
              target="_blank"
              href="https://www.tinkercad.com/things/65HHmzHpr6J?sharecode=qVK7BKTaVO9Dv4tlBHxW5eKNx4iNdgQIbh41E4n4n84"
            >
              Chien Picasso
            </a>
          </li>
          <li>
            Boite Switch Creeper :{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.tinkercad.com/things/gyUYKJdGNbX?sharecode=2FNBdHCpebR_BMOSUgp17sIzn3EjYNEgnVvylQw8_7Y"
              target="_blank"
            >
              [1]
            </a>{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.tinkercad.com/things/f6WoSLy7S9g?sharecode=AWalE9_MysNQ_ML2g73AVa8oQFyvv7xmQ5ZRn2s22dI"
              target="_blank"
            >
              [2]
            </a>{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.tinkercad.com/things/hGxxcSVhqWC?sharecode=7letwWn2ovzvYGb4zHda2m84oZmom_3CzZnzve_dkyg"
              target="_blank"
            >
              [3]
            </a>
          </li>
          <li>
            Louis - Porte clé Creeper{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.tinkercad.com/things/9K6cgxXITNp"
              target="_blank"
            >
              (version 1)
            </a>{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.tinkercad.com/things/ffDbXO9e7Ww"
              target="_blank"
            >
              (version 2)
            </a>{' '}
          </li>
        </ul>
      </div>
    </main>
  );
}
