const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.625rem'
      }
    },
    fontFamily: {
      sans: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans']
    },
    extend: {
      fontSize: {
        none: ['0', '0'],
        hero: ['4.625rem', '5rem'], // 74/80
        h1: ['2.813rem', '3.5rem'], // 45/56
        h2: ['2.125rem', '2.625rem'], // 35/42
        h3: ['1.563rem', '2rem'], // 25/32
        h4: ['1.25rem', '1.625rem'], // 20/24
        base: ['1rem', '1.5rem'], // 16/24
        base2: ['0.875rem', '1.375rem'], // 14/22
        caption: ['0.688rem', '1.125rem'] // 11/20
      },
      letterSpacing: {
        3: '0.03em', // -3%
        2: '0.02em', // -2%
        1: '0.01em' // -1%
      },
      lineHeight: {
        0: '0'
      },
      colors: {
        'abc-blue': '#3CC7F4',
        'abc-dark-blue': '#3D99D3',
        'abc-deep-blue': '#3D91CE',
        'abc-dark-red': '#DB5136',
        'abc-yellow': '#DBA936',
        'abc-deep-green': '#00A57E'
      },
      backgroundImage: {
        'gradient-45deg': 'linear-gradient(45deg, var(--tw-gradient-stops))'
      },
      maxWidth: {
        '1/2': '50%'
      },
      screens: {
        '2xl': '1460px'
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        offcanvasoverlay: '1040',
        offcanvas: '1045',
        modaloverlay: '1050',
        modal: '1055',
        popover: '1070',
        tooltip: '1080',
        toast: '1090'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            img: {
              borderRadius: theme('borderRadius.lg')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({addUtilities, theme}) {
      addUtilities({
        '.invalid': {
          fontSize: theme('fontSize.xs'),
          color: theme('colors.abc-dark-red'),
          fontStyle: 'italic'
        },
        '.overflow-initial': {
          overflow: 'initial'
        }
      });
    })
  ]
};
