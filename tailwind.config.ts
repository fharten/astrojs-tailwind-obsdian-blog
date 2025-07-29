import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Boldonse"', 'sans-serif'],
        sans: ['Butler', 'sans-serif'],
      },
      // colors: {
      //   bg: 'var(--bg)',
      //   'bg-dark': 'var(--bg-dark)',
      //   'bg-light': 'var(--bg-light)',
      //   text: 'var(--text)',
      //   'text-muted': 'var(--text-muted)',
      //   highlight: 'var(--highlight)',
      //   border: 'var(--border)',
      //   'border-muted': 'var(--border-muted)',
      //   primary: 'var(--primary)',
      //   secondary: 'var(--secondary)',
      //   danger: 'var(--danger)',
      //   warning: 'var(--warning)',
      //   success: 'var(--success)',
      //   info: 'var(--info)',

      //   // Light mode colors can also be added if you want to use them via Tailwind utilities
      //   'light-bg': 'var(--light-mode-bg)',
      //   'light-bg-dark': 'var(--light-mode-bg-dark)',
      //   'light-bg-light': 'var(--light-mode-bg-light)',
      //   'light-text': 'var(--light-mode-text)',
      //   'light-text-muted': 'var(--light-mode-text-muted)',
      //   'light-highlight': 'var(--light-mode-highlight)',
      //   'light-border': 'var(--light-mode-border)',
      //   'light-border-muted': 'var(--light-mode-border-muted)',
      //   'light-primary': 'var(--light-mode-primary)',
      //   'light-secondary': 'var(--light-mode-secondary)',
      //   'light-danger': 'var(--light-mode-danger)',
      //   'light-warning': 'var(--light-mode-warning)',
      //   'light-success': 'var(--light-mode-success)',
      //   'light-info': 'var(--light-mode-info)',
      // },
      // fontSize: {
      //   h1: 'var(--font-size-h1)',
      //   h2: 'var(--font-size-h2)',
      //   p: 'var(--font-size-p)',
      //   'p-small': 'var(--font-size-p-small)',
      //   'p-xsmall': 'var(--font-size-p-xsmall)',
      // },
      // lineHeight: {
      //   h1: 'var(--line-height-h1)',
      //   h2: 'var(--line-height-h2)',
      //   p: 'var(--line-height-p)',
      //   'p-small': 'var(--line-height-p-small)',
      //   'p-xsmall': 'var(--line-height-p-xsmall)',
      // },
      // letterSpacing: {
      //   h1: 'var(--tracking-h1)',
      //   h2: 'var(--tracking-h2)',
      //   p: 'var(--tracking-p)',
      //   'p-small': 'var(--tracking-p-small)',
      //   'p-xsmall': 'var(--tracking-p-xsmall)',
      // },
    },
  },
  plugins: [],
};

export default config;
