import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Boldonse"', 'sans-serif'],
        sans: ['Butler', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
