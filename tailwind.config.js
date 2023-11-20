/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        'xs': '0.625rem',      // 10px
        'sm': '0.75rem',       // 12px
        'base': '0.875rem',    // 14px (can be your new default)
        'lg': '1.125rem',      // 18px
        'xl': '1.25rem',       // 20px
        '2xl': '1.5rem',       // 24px
      },
      boxShadow: {  
        'sm': '0 4px 20px 0 rgb(0 0 0 / 0.05)'
      },
    },
  },
  plugins: [],
}
