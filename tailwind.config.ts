import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FB660D',
        background: '#F6F6F6',
        border: '#E7E7E7',
        gray: {
          DEFAULT: '#7F7F7F',
        },
        black: {
          DEFAULT: '#2F2F2F',
        },
        brown: {
          DEFAULT: '#775845',
        },
        destructive: {
          DEFAULT: '#FB210D',
        }
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
