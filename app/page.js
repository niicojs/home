import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="mt-4 mx-4">
      <div
        tabIndex={0}
        className="collapse group border border-base-300 bg-base-200 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div
          className={cn(
            'collapse-title peer-checked:bg-primary peer-checked:text-base-100',
            'text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl lg:text-4xl lg:leading-[1.1]'
          )}
        >
          3D
        </div>
        <div className="collapse-content">
          <ul className="mt-3 list-disc ml-8">
            <li>
              <a
                className="link link-hover link-primary"
                target="_blank"
                href="https://www.tinkercad.com/things/53Z9TQMEg7H?sharecode=n44QGb4Ur-5pmHr_7arI3ZBwCLysVjRRvX3v9gB6708"
              >
                Pieuvre
              </a>
            </li>
            <li>
              <a
                className="link link-hover link-primary"
                target="_blank"
                href="https://www.tinkercad.com/things/65HHmzHpr6J?sharecode=qVK7BKTaVO9Dv4tlBHxW5eKNx4iNdgQIbh41E4n4n84"
              >
                Chien Picasso
              </a>
            </li>
            <li>
              Boite Switch Creeper : {' '}
              <a
                className="link link-hover link-primary"
                href="https://www.tinkercad.com/things/gyUYKJdGNbX?sharecode=2FNBdHCpebR_BMOSUgp17sIzn3EjYNEgnVvylQw8_7Y"
                target="_blank"
              >
                [1]
              </a>{' '}
              <a
                className="link link-hover link-primary"
                href="https://www.tinkercad.com/things/f6WoSLy7S9g?sharecode=AWalE9_MysNQ_ML2g73AVa8oQFyvv7xmQ5ZRn2s22dI"
                target="_blank"
              >
                [2]
              </a>{' '}
              <a
                className="link link-hover link-primary"
                href="https://www.tinkercad.com/things/hGxxcSVhqWC?sharecode=7letwWn2ovzvYGb4zHda2m84oZmom_3CzZnzve_dkyg"
                target="_blank"
              >
                [3]
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
