import { useStore } from '@nanostores/react';
import { $isMobileMenuOpen } from '../store/mobileMenuStore';
import Hamburger from './Hamburger';
import Navbar from './Navbar';

export default function Header() {
  const isMobileMenuOpen = useStore($isMobileMenuOpen);

  return (
    <header>
      <nav>{isMobileMenuOpen ? <Hamburger /> : <Navbar />}</nav>
    </header>
  );
}
