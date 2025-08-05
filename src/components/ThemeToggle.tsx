import { Moon, Sun } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { $themeIsLight, toggleTheme } from '../store/themeStore';

export default function ThemeToggle() {
  const isThemeLight = useStore($themeIsLight);
  return (
    <button
      id="theme-toggle"
      className="cursor-pointer transition-all md:hover:scale-110"
      onClick={toggleTheme}
    >
      {isThemeLight ? (
        <Sun className="sun-icon mytext-base h-5 w-5" />
      ) : (
        <Moon className="moon-icon mytext-base h-5 w-5" />
      )}
    </button>
  );
}
