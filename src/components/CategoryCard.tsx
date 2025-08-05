import {
  MonitorCog,
  Cloudy,
  Server,
  Code,
  Lock,
  Mail,
  Cctv,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

type CategorieItem = {
  id: number;
  name: string;
  link: string;
  icon?: LucideIcon;
};

const categories: CategorieItem[] = [
  { id: 1, name: 'OS', link: 'os', icon: MonitorCog },
  { id: 2, name: 'Phone', link: 'phone', icon: Smartphone },
  { id: 3, name: 'Cloud', link: 'cloud', icon: Cloudy },
  { id: 4, name: 'Selfhost', link: 'selfhost', icon: Server },
  { id: 5, name: 'Open Source', link: 'opensource', icon: Code },
  { id: 6, name: 'Privacy', link: 'privacy', icon: Lock },
  { id: 7, name: 'Email', link: 'email', icon: Mail },
  { id: 8, name: 'Big Tech', link: 'bigtech', icon: Cctv },
];

export default function CategoryCard() {
  return (
    <>
      <div slot="head">
        <title>Categories | OTG</title>
      </div>
      <div className="mt-28 flex justify-center">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {categories.map((cat) => (
            <a
              href={`/categories/${cat.link}`}
              className="h-full w-full transition-all md:hover:scale-105"
            >
              <div className="bg-light col-span-1 flex size-32 items-center justify-center rounded-sm md:size-48">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                  {cat.icon && (
                    <cat.icon className="absolute top-6 -right-12 text-black/20" size={128} />
                  )}
                  <p className="h1 mytext-base z-10 p-4 text-center">{cat.name}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
