/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary palette — Deep Forest Green scheme
        forest: {
          50:  '#f0f5f2',
          100: '#dde7e1', // sage mist
          200: '#bcd1c6',
          300: '#8fb5a3',
          400: '#5a9478',
          500: '#32755a',
          600: '#1e5440',
          700: '#174032',
          800: '#123524', // Deep Forest Green — MAIN ACCENT
          900: '#0c2419',
          950: '#061410',
        },
        ivory:    '#F7F5F2', // Soft Ivory — primary background
        sage:     '#DDE7E1', // Sage Mist — light accent
        stone:    '#E7E3DD', // Light Stone — borders
        graphite: '#5F6368', // Graphite Gray — secondary text
        charcoal: '#111111', // Rich Black — primary text
        // Legacy aliases so old class names still resolve
        navy: {
          50:  '#f0f5f2',
          100: '#dde7e1',
          200: '#bcd1c6',
          300: '#8fb5a3',
          400: '#5a9478',
          500: '#32755a',
          600: '#1e5440',
          700: '#174032',
          800: '#17392b',
          900: '#123524',
          950: '#0c2419',
        },
        gold: {
          50:  '#f0f5f2',
          100: '#dde7e1',
          200: '#c5dbd1',
          300: '#99c4b0',
          400: '#DDE7E1', // sage mist — light accent on dark bg
          500: '#123524', // forest green — accent on light bg
          600: '#0e2a1c',
          700: '#0a1f14',
          800: '#07140d',
          900: '#030a07',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':      '0 4px 24px -4px rgba(18,53,36,0.07), 0 1px 4px rgba(18,53,36,0.04)',
        'card-hover':'0 12px 40px -8px rgba(18,53,36,0.16), 0 2px 8px rgba(18,53,36,0.06)',
        'forest':    '0 4px 24px rgba(18,53,36,0.22)',
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #123524 0%, #1e5440 100%)',
        'gradient-sage':   'linear-gradient(135deg, #DDE7E1 0%, #f0f5f2 100%)',
        // legacy
        'gradient-navy': 'linear-gradient(135deg, #123524 0%, #1e5440 100%)',
        'gradient-gold': 'linear-gradient(135deg, #123524 0%, #1e5440 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
