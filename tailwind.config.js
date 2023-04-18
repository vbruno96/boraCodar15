/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        wide: '.06em',
      },
    },
    colors: {
      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
      green: {
        100: '#04D361',
        200: '#1B873F',
      },
      purple: {
        100: '#996DFF',
        200: '#7C3AED',
      },
      white: '#FFFFFF',
      orange: '#FBA94C',
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1.125rem'],
      sm: ['0.875rem', '1.25'],
      base: ['1rem', '1.5rem'],
      md: ['1.125rem', '1.625rem'],
      lg: ['1.5rem', '2.25rem'],
      xl: ['2rem', '3rem'],
    },
  },
  plugins: [],
}
