/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe1fe',
          300: '#93cefd',
          400: '#60b1fa',
          500: '#3b91f6',
          600: '#2474eb',
          700: '#1d5ed8',
          800: '#1e4daf',
          900: '#1f438a',
          950: '#172a55',
        },
        sand: {
          50: '#fdf8f4',
          100: '#faeee0',
          200: '#f4dabf',
          300: '#ecc096',
          400: '#e29e6a',
          500: '#d98148',
          600: '#c8693a',
          700: '#a55230',
          800: '#84432e',
          900: '#6b3928',
        },
        ink: {
          900: '#0b1220',
          800: '#101a2e',
          700: '#1a2740',
          600: '#3b4660',
          500: '#5a6680',
          400: '#8a93a6',
          300: '#b6bcc9',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(120deg, rgba(11,18,32,0.85) 0%, rgba(29,94,216,0.55) 60%, rgba(217,129,72,0.45) 100%)',
        'card-glow':
          'linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(11,18,32,0.85) 100%)',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(11,18,32,0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px -20px rgba(36,116,235,0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0.96)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
        'scale-in': 'scale-in 0.25s ease-out both',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
