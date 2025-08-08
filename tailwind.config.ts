import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: ['class', '.light'], // Use .light as dark mode trigger
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Boldonse"', 'sans-serif'],
        sans: ['Zodiak-Variable', 'sans-serif'],
      },
      colors: {
        lightModeBgDark: 'oklch(0.92 0.025 160)',
        lightModeBg: 'oklch(0.96 0.025 160)',
        lightModeBgLight: 'oklch(1 0.025 160)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--text)',
            '--tw-prose-links': 'var(--text)',
            '--tw-prose-bold': 'var(--text)',
            '--tw-prose-captions': 'var(--text)',
            '--tw-prose-quotes': 'var(--text)',
            '--tw-prose-code': 'var(--text)',
            color: 'var(--text)',
            h1: {
              fontSize: '1.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--text)',
            },
            h2: {
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--text)',
            },
            p: { marginTop: '1em', marginBottom: '1em', color: 'var(--text)' },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': 'var(--light-mode-text)',
            '--tw-prose-headings': 'var(--light-mode-text)',
            '--tw-prose-links': 'var(--light-mode-link)',
            '--tw-prose-bold': 'var(--light-mode-text)',
            '--tw-prose-captions': 'var(--light-mode-text)',
            '--tw-prose-quotes': 'var(--light-mode-text)',
            '--tw-prose-code': 'var(--light-mode-text)',
            color: 'var(--light-mode-text)',
            h1: {
              fontSize: '1.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: 'var(--light-mode-text)',
            },
            h2: {
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--light-mode-text)',
            },
            p: { marginTop: '1em', marginBottom: '1em', color: 'var(--light-mode-text)' },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
