import { ArrowRight, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';
import { $isMobileMenuOpen, toggleMobileMenu } from '../store/mobileMenuStore';
import { useStore } from '@nanostores/react';

export default function Hamburger() {
  const [pathname, setPathname] = useState('');
  const pages = ['categories', 'why', 'imprint', 'privacy'];
  const isMobileMenuOpen = useStore($isMobileMenuOpen);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div
      className={`bg-base fixed top-0 z-50 h-screen w-full ${!$isMobileMenuOpen && 'hidden'}`}
      id="nav-links"
    >
      <div className="mb-5 flex p-5 md:hidden">
        <a href="/" className="flex-1">
          <h1 className="mytext-base font-heading h2 text-left">OFF THE GRID</h1>
        </a>
        <button
          id="hamburger"
          className="cursor-pointer transition-all md:hover:scale-110"
          onClick={toggleMobileMenu}
        >
          <X className={`mytext-muted ${!isMobileMenuOpen && 'hidden'}`} id="burger-close-button" />
        </button>
      </div>
      <div className="mx-auto flex w-5/6 flex-col">
        <hr className="border-base" />
        {pages.map((page) => {
          const isActive = pathname === `/${page}`;
          return (
            <div>
              <a href={`/${page}`} className={`${isActive ? 'bg-light' : ''} flex py-5`}>
                <p className="mytext-base h1 flex-1">{page.toUpperCase()}</p>
                <ArrowRight className="mytext-base h1" />
              </a>
              <hr className="border-base" />
            </div>
          );
        })}
        <div className="absolute right-5 bottom-5 mt-auto flex justify-end md:right-10 md:bottom-16">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
