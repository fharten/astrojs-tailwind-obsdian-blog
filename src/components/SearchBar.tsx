import { $searchQuery, setSearchQuery } from '../store/searchStore';
import Button from './Button';

export default function SearchBar() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  console.log('SearchBar mounted');

  return (
    <form
      className="mx-auto -mt-4 hidden w-1/2"
      id="search-bar"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="default-search" className="p-small mytext-base sr-only mb-2">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="mytext-light h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="p-small mytext-base bg-light border-muted block w-full rounded-lg border p-4 ps-10"
          placeholder="Search blog posts..."
          onChange={handleChange}
          required
        />
        {/* <Button text="Search" search /> */}
      </div>
    </form>
  );
}
