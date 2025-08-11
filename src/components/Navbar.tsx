import { Menu, Search } from 'lucide-react';
import SearchBar from './SearchBar';
import { useStore } from '@nanostores/react';
import { $isSearchBarOpen, toggleSearchBar } from '../store/searchBarUI';
import { $isMobileMenuOpen, toggleMobileMenu } from '../store/mobileMenuStore';
import { $themeIsLight } from '../store/themeStore';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const isMobileMenuOpen = useStore($isMobileMenuOpen);
  const isSearching = useStore($isSearchBarOpen);

  useEffect(() => {
    const searchBarCheck = () => {
      if (isSearching) {
        setSearchBarOpen(true);
      } else {
        setSearchBarOpen(false);
      }
    };
    searchBarCheck();
  }, [isSearching]);

  return (
    <div className={`${searchBarOpen && 'pb-16'}`}>
      <div className="fixed top-0 z-50 w-full">
        <div className="mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <div className="hidden grid-cols-10 items-center justify-center md:grid">
            <div className="col-span-1 flex justify-start">
              <ThemeToggle />
            </div>
            <div className="col-span-2 flex justify-start">
              <a href="/categories">
                <h1 className="font-heading mytext-base p-small py-10 text-center transition-all md:hover:scale-105">
                  CATEGORIES
                </h1>
              </a>
            </div>
            <div className="col-span-4">
              <a href="/">
                <h1 className="font-heading h1 mytext-base py-10 text-center">OFF THE GRID</h1>
              </a>
            </div>
            <div className="col-span-2 flex justify-end">
              <a href="/why">
                <h1 className="font-heading mytext-base p-small py-10 text-center transition-all md:hover:scale-105">
                  WHY
                </h1>
              </a>
            </div>
            <div className="col-span-1 flex justify-end">
              <button
                id="search-icon"
                className="cursor-pointer transition-all md:hover:scale-110"
                onClick={toggleSearchBar}
              >
                <Search className="mytext-base h-5 w-5" />
              </button>
            </div>
          </div>
          <SearchBar />
        </div>

        <div className="mb-5 flex p-5 md:hidden">
          <a href="/" className="flex-1">
            <h1 className="mytext-base font-heading h2 text-left">OFF THE GRID</h1>
          </a>
          <button
            id="hamburger"
            className="cursor-pointer transition-all md:hover:scale-110"
            onClick={toggleMobileMenu}
          >
            <Menu id="hamburger-icon" className={`mytext-muted ${isMobileMenuOpen && 'hidden'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
