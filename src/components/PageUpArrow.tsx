import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Button() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="page-up"
      className={`fixed right-0 bottom-0 z-40 transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0'}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="absolute right-5 bottom-5 md:right-10 md:bottom-10">
        <ArrowUp className="mytext-muted" />
      </div>
    </button>
  );
}
