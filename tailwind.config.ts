import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      Desktop: '1280px'
    },
    colors: {
      white: '#ffffff',
      grey: '#f4f4f4',
      black: '#000000'
    },
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
      fontSize: {
        HeaderPC: ['2rem', { fontWeight: 400, lineHeight: 'normal' }],
        HeaderMobile: ['3.2rem', { fontWeight: 200, lineHeight: 'normal' }]
      },
      keyframes: {
        infiniteSlide: {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(-100%)' }
        }
      },
      animation: {
        infiniteSlide: 'infiniteSlide 5s linear infinite'
      }
    }
  },
  plugins: []
}
export default config
