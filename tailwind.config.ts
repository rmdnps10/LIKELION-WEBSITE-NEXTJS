import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      pp: ['var(--font-pp)'],
      pretendard: ['var(--font-pretendard)'],
      figtree: ['var(--font-figtree)']
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        white: '#ffffff',
        grey: '#f4f4f4',
        black: '#000000'
      },
      screens: {
        mobile: '480px',
        tablet: '768px',
        Desktop: '1280px'
      },

      fontSize: {
        HeaderPC: ['2rem', { fontWeight: 400, lineHeight: 'normal' }],
        HeaderMobile: ['3.2rem', { fontWeight: 200, lineHeight: 'normal' }]
      },
      keyframes: {
        infiniteSlide: {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(-100%)' }
        },
        scaleLeft: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: '0% 0%'
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: '0% 0%'
          }
        },
        scaleDownCenter: {
          '0%': {
            transform: 'scaleX(1)'
          },
          '100%': {
            transform: 'scaleX(0.3)'
          }
        }
      },
      animation: {
        infiniteSlide: 'infiniteSlide 5s linear infinite forwards',
        scaleLeft: 'scaleLeft 0.5s ease-in',
        scaleDownCenter: 'scaleDownCenter 0.5s ease-in forwards'
      }
    }
  },
  plugins: []
}
export default config
